import * as mappedin from '@mappedin/react-sdk';
const { useMap } = mappedin;
import DemoCard from './DemoCard';
import { useEffect, useRef, useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Pause, Play, RotateCcw, Info } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Slider } from '@/components/ui/slider';
import { MapboxOverlay } from '@deck.gl/mapbox';
import { createHeatmapLayerFromPositions } from '@/lib/heatmap-layer';
import { pointInGeoJSON } from '@/lib/geo-utils';

const DEFAULT_NUM_TRAVELERS = 2000;
const UPDATES_PER_SECOND = 10;
const WALKING_SPEED_MPS = 6.0;
const DISTANCE_PER_UPDATE = WALKING_SPEED_MPS / UPDATES_PER_SECOND;

interface GraphNode {
  lat: number;
  lng: number;
  neighborIds: string[];
}

interface Traveler {
  fromId: string;
  toId: string;
  progress: number; // 0..1 along the edge
  lng: number;
  lat: number;
}

/** Approximate edge length in metres between two lat/lng points. */
function edgeLength(a: GraphNode, b: GraphNode): number {
  const dx = (b.lng - a.lng) * 111320 * Math.cos(a.lat * Math.PI / 180);
  const dy = (b.lat - a.lat) * 110540;
  return Math.sqrt(dx * dx + dy * dy);
}

export default function LiveHeatmapDemo() {
  const { mapData, mapView } = useMap();

  const isEnabled = useRef(false);
  const isPlaying = useRef(false);
  const [playing, setPlaying] = useState(false);
  const [numTravelers, setNumTravelers] = useState(DEFAULT_NUM_TRAVELERS);

  const graphRef = useRef<Map<string, GraphNode>>(new Map());
  const nodeIdsRef = useRef<string[]>([]);
  const travelersRef = useRef<Traveler[]>([]);
  const positionsRef = useRef<Float64Array>(new Float64Array(0));
  const overlayRef = useRef<MapboxOverlay | null>(null);
  const rafRef = useRef<number | null>(null);
  const lastTickRef = useRef<number>(0);
  const frameRef = useRef(0);

  /** Build a flat graph from the current floor's nodes, filtered to those inside the floor polygon. */
  const buildGraph = useCallback((): Map<string, GraphNode> => {
    const graph = new Map<string, GraphNode>();
    const floor = mapView.currentFloor;
    const floorId = floor.id;
    const polygon = floor.geoJSON?.geometry ?? null;

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

  function pickRandomNeighbor(node: GraphNode, excludeId?: string): string | null {
    const pool = excludeId
      ? node.neighborIds.filter((id) => id !== excludeId)
      : node.neighborIds;
    if (pool.length === 0) return node.neighborIds[0] ?? null;
    return pool[Math.floor(Math.random() * pool.length)];
  }

  function moveTraveler(t: Traveler): void {
    const graph = graphRef.current;
    const fromNode = graph.get(t.fromId);
    const toNode = graph.get(t.toId);
    if (!fromNode || !toNode) return;

    const len = edgeLength(fromNode, toNode);
    const step = len > 0 ? DISTANCE_PER_UPDATE / len : 1;
    t.progress = Math.min(1, t.progress + step);

    // Interpolate position
    t.lng = fromNode.lng + (toNode.lng - fromNode.lng) * t.progress;
    t.lat = fromNode.lat + (toNode.lat - fromNode.lat) * t.progress;

    // Arrived at toNode — pick next edge
    if (t.progress >= 1) {
      const nextId = pickRandomNeighbor(toNode, t.fromId);
      if (nextId) {
        t.fromId = t.toId;
        t.toId = nextId;
        t.progress = 0;
      }
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
        layers: [
          createHeatmapLayerFromPositions(
            positionsRef.current,
            travelersRef.current.length,
            frameRef.current,
          ),
        ],
      });
    }
  }

  const initializeTravelers = useCallback(
    (count: number): void => {
      const graph = buildGraph();
      graphRef.current = graph;
      const nodeIds = Array.from(graph.keys()).filter(
        (id) => (graph.get(id)!.neighborIds.length > 0),
      );
      nodeIdsRef.current = nodeIds;
      if (nodeIds.length < 2) return;

      const travelers: Traveler[] = [];
      for (let i = 0; i < count; i++) {
        const fromId = nodeIds[Math.floor(Math.random() * nodeIds.length)];
        const fromNode = graph.get(fromId)!;
        const toId = pickRandomNeighbor(fromNode) ?? fromId;
        const toNode = graph.get(toId)!;
        travelers.push({
          fromId,
          toId,
          progress: Math.random(), // stagger starting positions along the edge
          lng: fromNode.lng + (toNode.lng - fromNode.lng) * 0,
          lat: fromNode.lat + (toNode.lat - fromNode.lat) * 0,
        });
      }
      travelersRef.current = travelers;
      positionsRef.current = new Float64Array(count * 2);
      syncPositions();
    },
    [buildGraph],
  );

  const tick = useCallback(
    (now: number) => {
      if (!isPlaying.current) return;
      const elapsed = now - lastTickRef.current;
      if (elapsed < 1000 / UPDATES_PER_SECOND) {
        rafRef.current = requestAnimationFrame(tick);
        return;
      }
      lastTickRef.current = now;

      for (const t of travelersRef.current) moveTraveler(t);
      syncPositions();
      updateOverlay();

      rafRef.current = requestAnimationFrame(tick);
    },
    [],
  );

  const startSimulation = useCallback(() => {
    if (rafRef.current) return;
    lastTickRef.current = performance.now();
    rafRef.current = requestAnimationFrame(tick);
  }, [tick]);

  const stopSimulation = useCallback(() => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
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
      if (map) {
        try {
          map.removeControl(
            overlayRef.current as unknown as Parameters<typeof map.removeControl>[0],
          );
        } catch { /* already removed */ }
      }
      overlayRef.current = null;
    }
  }, [mapView]);

  useEffect(() => {
    return () => {
      stopSimulation();
      removeOverlay();
    };
  }, [stopSimulation, removeOverlay]);

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
    }
  }

  function handlePlayPause() {
    const next = !isPlaying.current;
    isPlaying.current = next;
    setPlaying(next);
    if (next) startSimulation();
  }

  function handleReset() {
    isPlaying.current = false;
    setPlaying(false);
    stopSimulation();
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
      if (wasPlaying) {
        isPlaying.current = true;
        setPlaying(true);
        startSimulation();
      }
    }
  }

  return (
    <DemoCard
      title="Live Heatmap"
      description="Simulate real-time crowd movement"
      onEnabled={handleEnabled}
    >
      <div className="flex items-center gap-2">
        <Button onClick={handlePlayPause} variant="ghost" size="icon" className="size-8">
          {playing ? <Pause /> : <Play />}
        </Button>
        <Button onClick={handleReset} variant="ghost" size="icon" className="size-8">
          <RotateCcw />
        </Button>
      </div>

      <Separator />

      <div className="space-y-1">
        <label className="text-xs text-muted-foreground">
          Travelers: {numTravelers}
        </label>
        <Slider
          value={[numTravelers]}
          min={1000}
          max={10000}
          step={100}
          onValueChange={(v) => setNumTravelers(v[0])}
          onValueCommit={handleTravelerCountChange}
        />
      </div>

      <Separator />

      <p>
        <Info size="14" className="inline align-middle mr-1 text-muted-foreground" />
        <i className="text-muted-foreground text-xs">
          Simulated crowd movement using pathfinding between spaces.
        </i>
      </p>
    </DemoCard>
  );
}
