import * as mappedin from '@mappedin/react-sdk';
const { useEvent, useMap } = mappedin;
import DemoCard from './DemoCard';
import { useEffect, useRef, useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Pause, Play, RotateCcw, Info, X } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Slider } from '@/components/ui/slider';
import { MapboxOverlay } from '@deck.gl/mapbox';
import { createHeatmapLayerFromPositions } from '@/lib/heatmap-layer';
import { pointInGeoJSON } from '@/lib/geo-utils';

// ── Heatmap simulation constants ──────────────────────────────────────────────
const DEFAULT_NUM_TRAVELERS  = 2000;
const UPDATES_PER_SECOND     = 10;
const WALKING_SPEED_MPS      = 6.0;
const DISTANCE_PER_UPDATE    = WALKING_SPEED_MPS / UPDATES_PER_SECOND;

// ── Zone constants ─────────────────────────────────────────────────────────────
const ZONE_RADIUS_M  = 4;
const COLOR_START    = '#22c55e';
const COLOR_END      = '#3b82f6';

// ── Types ──────────────────────────────────────────────────────────────────────
interface GraphNode {
  lat: number;
  lng: number;
  neighborIds: string[];
}

interface Traveler {
  fromId: string;
  toId: string;
  progress: number;
  lng: number;
  lat: number;
}

interface ZoneEntry {
  id: string;
  center: mappedin.Coordinate;
  geoJSON: GeoJSON.Feature<GeoJSON.Polygon>;
  shape: mappedin.Shape;
  density: number;    // 0–100: how crowded this zone is
  threshold: number;  // 0–100: density above which routing avoids the zone
}

// ── Helpers ────────────────────────────────────────────────────────────────────
function edgeLength(a: GraphNode, b: GraphNode): number {
  const dx = (b.lng - a.lng) * 111320 * Math.cos(a.lat * Math.PI / 180);
  const dy = (b.lat - a.lat) * 110540;
  return Math.sqrt(dx * dx + dy * dy);
}

function distMetres(a: mappedin.Coordinate, b: mappedin.Coordinate): number {
  const dx = (a.longitude - b.longitude) * 111320 * Math.cos(a.latitude * Math.PI / 180);
  const dy = (a.latitude  - b.latitude)  * 110540;
  return Math.sqrt(dx * dx + dy * dy);
}

function makeCirclePolygon(center: mappedin.Coordinate, radiusM: number): GeoJSON.Feature<GeoJSON.Polygon> {
  const lat = center.latitude;
  const lng = center.longitude;
  const latDeg = radiusM / 110540;
  const lngDeg = radiusM / (111320 * Math.cos((lat * Math.PI) / 180));
  const steps = 16;
  const coords: [number, number][] = [];
  for (let i = 0; i <= steps; i++) {
    const angle = (i / steps) * 2 * Math.PI;
    coords.push([lng + lngDeg * Math.cos(angle), lat + latDeg * Math.sin(angle)]);
  }
  return { type: 'Feature', geometry: { type: 'Polygon', coordinates: [coords] }, properties: {} };
}

/** Interpolate between two hex colors by t in [0,1]. */
function lerpColor(a: string, b: string, t: number): string {
  const h = (s: string) => parseInt(s, 16);
  const ar = h(a.slice(1, 3)), ag = h(a.slice(3, 5)), ab = h(a.slice(5, 7));
  const br = h(b.slice(1, 3)), bg = h(b.slice(3, 5)), bb = h(b.slice(5, 7));
  const r = Math.round(ar + (br - ar) * t);
  const g = Math.round(ag + (bg - ag) * t);
  const bv = Math.round(ab + (bb - ab) * t);
  return `#${r.toString(16).padStart(2,'0')}${g.toString(16).padStart(2,'0')}${bv.toString(16).padStart(2,'0')}`;
}

/** Zone color: green (low) → orange (medium) → red (high density). */
function zoneColor(density: number, threshold: number): string {
  const t = density / 100;
  const isBlocked = density > threshold;
  if (isBlocked) return lerpColor('#f97316', '#ef4444', Math.min(1, (density - threshold) / (100 - threshold)));
  return lerpColor('#86efac', '#f97316', t);
}

// ── Component ──────────────────────────────────────────────────────────────────
export default function DynamicRoutingLiveHeatMap() {
  const { mapData, mapView } = useMap();

  // ── Simulation state ─────────────────────────────────────────────────────────
  const isEnabled   = useRef(false);
  const isPlaying   = useRef(false);
  const [playing, setPlaying]         = useState(false);
  const [numTravelers, setNumTravelers] = useState(DEFAULT_NUM_TRAVELERS);

  const graphRef      = useRef<Map<string, GraphNode>>(new Map());
  const nodeIdsRef    = useRef<string[]>([]);
  const travelersRef  = useRef<Traveler[]>([]);
  const positionsRef  = useRef<Float64Array>(new Float64Array(0));
  const overlayRef    = useRef<MapboxOverlay | null>(null);
  const rafRef        = useRef<number | null>(null);
  const lastTickRef   = useRef<number>(0);
  const frameRef      = useRef(0);

  // ── Routing state ─────────────────────────────────────────────────────────────
  const startSpace  = useRef<mappedin.Space | null>(null);
  const endSpace    = useRef<mappedin.Space | null>(null);
  const origStates  = useRef<Map<string, { color: string; hoverColor: string }>>(new Map());

  // Zones stored in ref for simulation loop + state for React re-render
  const zonesRef = useRef<ZoneEntry[]>([]);
  const [zones, setZones] = useState<ZoneEntry[]>([]);

  // ── Graph building ────────────────────────────────────────────────────────────
  const buildGraph = useCallback((): Map<string, GraphNode> => {
    const graph = new Map<string, GraphNode>();
    const floor    = mapView.currentFloor;
    const floorId  = floor.id;
    const polygon  = floor.geoJSON?.geometry ?? null;

    const nodes = (mapData.getByType('node') as mappedin.Node[]).filter((n) => {
      if (n.floor.id !== floorId) return false;
      if (n.space?.type === 'exterior') return false;
      if (!polygon) return true;
      return pointInGeoJSON(n.coordinate.longitude, n.coordinate.latitude, polygon);
    });

    const nodeSet = new Set(nodes.map((n) => n.id));
    for (const n of nodes) {
      graph.set(n.id, {
        lat: n.coordinate.latitude,
        lng: n.coordinate.longitude,
        neighborIds: n.neighbors
          .filter((nb) => nodeSet.has(nb.id))
          .map((nb) => nb.id),
      });
    }
    return graph;
  }, [mapData, mapView]);

  // ── Traveler movement ─────────────────────────────────────────────────────────
  function pickRandomNeighbor(node: GraphNode, excludeId?: string): string | null {
    const pool = excludeId ? node.neighborIds.filter((id) => id !== excludeId) : node.neighborIds;
    if (pool.length === 0) return node.neighborIds[0] ?? null;

    const graph = graphRef.current;
    const activeZones = zonesRef.current.filter((z) => z.density > 0);

    if (activeZones.length === 0) {
      return pool[Math.floor(Math.random() * pool.length)];
    }

    // For each candidate neighbor, compute weight based on how much it moves toward any zone center.
    // A neighbor that is closer to a zone center than the current node gets a boost proportional to density.
    const weights = pool.map((id) => {
      const nb = graph.get(id);
      if (!nb) return 1;
      let w = 1;
      for (const zone of activeZones) {
        // Distance from current node to zone center
        const dxCur = (node.lng - zone.center.longitude) * 111320 * Math.cos(node.lat * Math.PI / 180);
        const dyCur = (node.lat - zone.center.latitude) * 110540;
        const distCur = Math.sqrt(dxCur * dxCur + dyCur * dyCur);

        // Distance from neighbor to zone center
        const dxNb = (nb.lng - zone.center.longitude) * 111320 * Math.cos(nb.lat * Math.PI / 180);
        const dyNb = (nb.lat - zone.center.latitude) * 110540;
        const distNb = Math.sqrt(dxNb * dxNb + dyNb * dyNb);

        // Only boost if this step moves toward the zone
        if (distNb < distCur) {
          // Scale: density 0→0 bias, density 100→19x extra weight (total 20x)
          const boost = (zone.density / 100) * 19;
          w += boost;
        }
      }
      return w;
    });

    const total = weights.reduce((s, w) => s + w, 0);
    let r = Math.random() * total;
    for (let i = 0; i < pool.length; i++) {
      r -= weights[i];
      if (r <= 0) return pool[i];
    }
    return pool[pool.length - 1];
  }

  function moveTraveler(t: Traveler): void {
    const graph = graphRef.current;
    const fromNode = graph.get(t.fromId);
    const toNode   = graph.get(t.toId);
    if (!fromNode || !toNode) return;

    const len  = edgeLength(fromNode, toNode);
    const step = len > 0 ? DISTANCE_PER_UPDATE / len : 1;
    t.progress = Math.min(1, t.progress + step);
    t.lng = fromNode.lng + (toNode.lng - fromNode.lng) * t.progress;
    t.lat = fromNode.lat + (toNode.lat - fromNode.lat) * t.progress;

    if (t.progress >= 1) {
      const nextId = pickRandomNeighbor(toNode, t.fromId);
      if (nextId) { t.fromId = t.toId; t.toId = nextId; t.progress = 0; }
    }
  }

  function syncPositions(): void {
    const travelers = travelersRef.current;
    const pos = positionsRef.current;
    for (let i = 0; i < travelers.length; i++) {
      pos[i * 2]     = travelers[i].lng;
      pos[i * 2 + 1] = travelers[i].lat;
    }
  }

  function updateOverlay(): void {
    if (overlayRef.current) {
      frameRef.current += 1;
      overlayRef.current.setProps({
        layers: [createHeatmapLayerFromPositions(positionsRef.current, travelersRef.current.length, frameRef.current)],
      });
    }
  }

  const initializeTravelers = useCallback((count: number): void => {
    const graph   = buildGraph();
    graphRef.current = graph;
    const nodeIds = Array.from(graph.keys()).filter((id) => graph.get(id)!.neighborIds.length > 0);
    nodeIdsRef.current = nodeIds;
    if (nodeIds.length < 2) return;

    const travelers: Traveler[] = [];
    for (let i = 0; i < count; i++) {
      const fromId   = nodeIds[Math.floor(Math.random() * nodeIds.length)];
      const fromNode = graph.get(fromId)!;
      const toId     = pickRandomNeighbor(fromNode) ?? fromId;
      const toNode   = graph.get(toId)!;
      travelers.push({ fromId, toId, progress: Math.random(), lng: fromNode.lng, lat: fromNode.lat });
      // set initial interpolated position
      travelers[i].lng = fromNode.lng + (toNode.lng - fromNode.lng) * travelers[i].progress;
      travelers[i].lat = fromNode.lat + (toNode.lat - fromNode.lat) * travelers[i].progress;
    }
    travelersRef.current  = travelers;
    positionsRef.current  = new Float64Array(count * 2);
    syncPositions();
  }, [buildGraph]);

  const tick = useCallback((now: number) => {
    if (!isPlaying.current) return;
    const elapsed = now - lastTickRef.current;
    if (elapsed < 1000 / UPDATES_PER_SECOND) { rafRef.current = requestAnimationFrame(tick); return; }
    lastTickRef.current = now;
    for (const t of travelersRef.current) moveTraveler(t);
    syncPositions();
    updateOverlay();
    rafRef.current = requestAnimationFrame(tick);
  }, []);

  const startSimulation = useCallback(() => {
    if (rafRef.current) return;
    lastTickRef.current = performance.now();
    rafRef.current = requestAnimationFrame(tick);
  }, [tick]);

  const stopSimulation = useCallback(() => {
    if (rafRef.current) { cancelAnimationFrame(rafRef.current); rafRef.current = null; }
  }, []);

  const setupOverlay = useCallback(() => {
    const map = mapView.Outdoor?.map;
    if (!map || overlayRef.current) return;
    const overlay = new MapboxOverlay({ interleaved: false, layers: [] });
    map.addControl(overlay as unknown as Parameters<typeof map.addControl>[0]);
    overlayRef.current = overlay;
  }, [mapView]);

  const removeOverlay = useCallback(() => {
    if (overlayRef.current) {
      const map = mapView.Outdoor?.map;
      if (map) { try { map.removeControl(overlayRef.current as unknown as Parameters<typeof map.removeControl>[0]); } catch { /* already removed */ } }
      overlayRef.current = null;
    }
  }, [mapView]);

  // ── Routing helpers ───────────────────────────────────────────────────────────
  function saveOrig(space: mappedin.Space) {
    if (origStates.current.has(space.id)) return;
    const s = mapView.getState(space) as { color?: string; hoverColor?: string } | null;
    origStates.current.set(space.id, { color: s?.color ?? 'white', hoverColor: s?.hoverColor ?? 'lightgrey' });
  }

  function restoreSpace(space: mappedin.Space) {
    const orig = origStates.current.get(space.id);
    if (orig) mapView.updateState(space, orig);
  }

  const redrawRoute = useCallback((currentZones?: ZoneEntry[]) => {
    mapView.Navigation.clear();
    if (!startSpace.current || !endSpace.current) return;
    const z = currentZones ?? zonesRef.current;
    const dirZones: mappedin.TDirectionZone[] = z.map((zone) => ({
      geometry: zone.geoJSON,
      cost: zone.density > zone.threshold ? Infinity : 0,
      floor: mapView.currentFloor,
    }));
    const directions = mapData.getDirections(startSpace.current, endSpace.current, { zones: dirZones });
    if (directions) mapView.Navigation.draw(directions);
  }, [mapData, mapView]);

  function updateZoneShape(zone: ZoneEntry) {
    mapView.Shapes.remove(zone.shape);
    const color = zoneColor(zone.density, zone.threshold);
    return mapView.Shapes.add(
      { type: 'FeatureCollection', features: [zone.geoJSON] },
      { color, opacity: 0.6 },
      mapView.currentFloor,
    );
  }

  function addZone(center: mappedin.Coordinate) {
    const geoJSON = makeCirclePolygon(center, ZONE_RADIUS_M);
    const density   = 50;
    const threshold = 70;
    const color     = zoneColor(density, threshold);
    const shape = mapView.Shapes.add(
      { type: 'FeatureCollection', features: [geoJSON] },
      { color, opacity: 0.6 },
      mapView.currentFloor,
    );
    const entry: ZoneEntry = { id: `${Date.now()}-${Math.random()}`, center, geoJSON, shape, density, threshold };
    const next = [...zonesRef.current, entry];
    zonesRef.current = next;
    setZones([...next]);
    redrawRoute(next);
  }

  function removeZone(id: string) {
    const zone = zonesRef.current.find((z) => z.id === id);
    if (zone) mapView.Shapes.remove(zone.shape);
    const next = zonesRef.current.filter((z) => z.id !== id);
    zonesRef.current = next;
    setZones([...next]);
    redrawRoute(next);
  }

  function updateZoneDensity(id: string, density: number) {
    const next = zonesRef.current.map((z) => {
      if (z.id !== id) return z;
      const updated = { ...z, density, shape: updateZoneShape({ ...z, density }) };
      return updated;
    });
    zonesRef.current = next;
    setZones([...next]);
    redrawRoute(next);
  }

  function updateZoneThreshold(id: string, threshold: number) {
    const next = zonesRef.current.map((z) => {
      if (z.id !== id) return z;
      const updated = { ...z, threshold, shape: updateZoneShape({ ...z, threshold }) };
      return updated;
    });
    zonesRef.current = next;
    setZones([...next]);
    redrawRoute(next);
  }

  // ── Click handlers ────────────────────────────────────────────────────────────
  useEvent('click', ({ coordinate, spaces }) => {
    if (!isEnabled.current) return;

    if (!startSpace.current) {
      if (!spaces.length) return;
      saveOrig(spaces[0]);
      startSpace.current = spaces[0];
      mapView.updateState(spaces[0], { color: COLOR_START, hoverColor: COLOR_START });
      return;
    }
    if (!endSpace.current) {
      if (!spaces.length) return;
      if (spaces[0].id === startSpace.current.id) return;
      saveOrig(spaces[0]);
      endSpace.current = spaces[0];
      mapView.updateState(spaces[0], { color: COLOR_END, hoverColor: COLOR_END });
      redrawRoute();
      return;
    }

    // Check if clicking near an existing zone to remove it
    const nearby = zonesRef.current.find((z) => distMetres(z.center, coordinate) < ZONE_RADIUS_M * 1.5);
    if (nearby) { removeZone(nearby.id); return; }

    addZone(coordinate);
  });

  // ── Lifecycle ─────────────────────────────────────────────────────────────────
  function handleEnabled(enabled: boolean) {
    isEnabled.current = enabled;
    if (enabled) {
      setupOverlay();
      initializeTravelers(numTravelers);
      updateOverlay();
      isPlaying.current = true;
      setPlaying(true);
      startSimulation();
    } else {
      isPlaying.current = false;
      setPlaying(false);
      stopSimulation();
      travelersRef.current = [];
      positionsRef.current = new Float64Array(0);
      updateOverlay();
      removeOverlay();
      // Clear zones
      for (const z of zonesRef.current) mapView.Shapes.remove(z.shape);
      zonesRef.current = [];
      setZones([]);
      // Clear route + endpoints
      mapView.Navigation.clear();
      if (startSpace.current) { restoreSpace(startSpace.current); startSpace.current = null; }
      if (endSpace.current)   { restoreSpace(endSpace.current);   endSpace.current   = null; }
      origStates.current.clear();
    }
  }

  function handlePlayPause() {
    const next = !isPlaying.current;
    isPlaying.current = next;
    setPlaying(next);
    if (next) startSimulation();
  }

  function handleReset() {
    stopSimulation();
    isPlaying.current = false;
    setPlaying(false);
    initializeTravelers(numTravelers);
    updateOverlay();
    isPlaying.current = true;
    setPlaying(true);
    startSimulation();
  }

  function handleTravelerCountChange(value: number[]) {
    const count = value[0];
    setNumTravelers(count);
    if (isEnabled.current) {
      const wasPlaying = isPlaying.current;
      isPlaying.current = false;
      stopSimulation();
      initializeTravelers(count);
      updateOverlay();
      if (wasPlaying) { isPlaying.current = true; setPlaying(true); startSimulation(); }
    }
  }

  useEffect(() => () => {
    stopSimulation();
    removeOverlay();
    for (const z of zonesRef.current) mapView.Shapes.remove(z.shape);
    zonesRef.current = [];
    mapView.Navigation.clear();
    if (startSpace.current) { restoreSpace(startSpace.current); startSpace.current = null; }
    if (endSpace.current)   { restoreSpace(endSpace.current);   endSpace.current   = null; }
    origStates.current.clear();
  }, [stopSimulation, removeOverlay]);

  // ── Render ────────────────────────────────────────────────────────────────────
  return (
    <DemoCard
      title="Dynamic Routing + Live Heatmap"
      description="Crowd simulation with density-aware routing"
      onEnabled={handleEnabled}
    >
      {/* Simulation controls */}
      <div className="flex items-center gap-2">
        <Button onClick={handlePlayPause} variant="ghost" size="icon" className="size-8">
          {playing ? <Pause /> : <Play />}
        </Button>
        <Button onClick={handleReset} variant="ghost" size="icon" className="size-8">
          <RotateCcw />
        </Button>
      </div>

      <div className="space-y-1">
        <label className="text-xs text-muted-foreground">Travelers: {numTravelers}</label>
        <Slider
          value={[numTravelers]}
          min={100}
          max={5000}
          step={100}
          onValueChange={(v) => setNumTravelers(v[0])}
          onValueCommit={handleTravelerCountChange}
        />
      </div>

      <Separator />

      {/* Route setup instructions */}
      <div className="space-y-1 text-xs text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="inline-block size-3 rounded-full flex-shrink-0" style={{ backgroundColor: COLOR_START }} />
          <span>1st click on a room — <b>start</b></span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block size-3 rounded-full flex-shrink-0" style={{ backgroundColor: COLOR_END }} />
          <span>2nd click on a room — <b>end</b></span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block size-3 rounded-full bg-orange-400 flex-shrink-0" />
          <span>Click corridor — place <b>crowd zone</b></span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block size-3 rounded-full border border-muted-foreground/40 flex-shrink-0" />
          <span>Click zone — <b>remove</b> it</span>
        </div>
      </div>

      {/* Zone controls */}
      {zones.length > 0 && (
        <>
          <Separator />
          <div className="space-y-3">
            <p className="text-xs font-medium">Crowd Zones</p>
            {zones.map((zone, i) => (
              <div key={zone.id} className="space-y-2 rounded-md border p-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-muted-foreground">Zone {i + 1}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="size-5"
                    onClick={() => removeZone(zone.id)}
                  >
                    <X size={11} />
                  </Button>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Density</span>
                    <span
                      className="font-medium tabular-nums"
                      style={{ color: zoneColor(zone.density, zone.threshold) }}
                    >
                      {zone.density}%
                    </span>
                  </div>
                  <Slider
                    value={[zone.density]}
                    min={0}
                    max={100}
                    step={5}
                    onValueCommit={(v) => updateZoneDensity(zone.id, v[0])}
                    onValueChange={(v) => setZones((prev) => prev.map((z) => z.id === zone.id ? { ...z, density: v[0] } : z))}
                  />
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Avoid threshold</span>
                    <span className="font-medium tabular-nums">{zone.threshold}%</span>
                  </div>
                  <Slider
                    value={[zone.threshold]}
                    min={0}
                    max={100}
                    step={5}
                    onValueCommit={(v) => updateZoneThreshold(zone.id, v[0])}
                    onValueChange={(v) => setZones((prev) => prev.map((z) => z.id === zone.id ? { ...z, threshold: v[0] } : z))}
                  />
                </div>

                <p className="text-[10px] text-muted-foreground">
                  {zone.density > zone.threshold
                    ? '🔴 Route blocked — too crowded'
                    : '🟢 Route passes through'}
                </p>
              </div>
            ))}
          </div>
        </>
      )}

      <Separator />

      <p>
        <Info size="14" className="inline align-middle mr-1 text-muted-foreground" />
        <i className="text-muted-foreground text-xs">
          Route avoids zones where density exceeds the threshold. Raise threshold to allow passage; lower it to force a detour.
        </i>
      </p>
    </DemoCard>
  );
}
