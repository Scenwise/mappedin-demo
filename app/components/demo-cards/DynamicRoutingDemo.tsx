import * as mappedin from '@mappedin/react-sdk';
const { useEvent, useMap } = mappedin;
import DemoCard from './DemoCard';
import { useEffect, useRef, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Info, RotateCcw } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const COLOR_START  = '#22c55e';
const COLOR_END    = '#3b82f6';
const COLOR_AVOID  = '#f97316';
const COLOR_CLOSED = '#ef4444';

// Radius in metres of each zone polygon
const ZONE_RADIUS_M = 4;
// Avoid zones have high cost so routing detours if possible
const AVOID_COST    = 1000;

type ZoneEntry = {
  id: string;
  type: 'avoid' | 'closed';
  center: mappedin.Coordinate;
  geoJSON: GeoJSON.Feature<GeoJSON.Polygon>;
  shape: mappedin.Shape;
};

/** Build a GeoJSON polygon circle with ~16 sides around a lat/lng centre. */
function makeCirclePolygon(
  center: mappedin.Coordinate,
  radiusM: number,
): GeoJSON.Feature<GeoJSON.Polygon> {
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
  return {
    type: 'Feature',
    geometry: { type: 'Polygon', coordinates: [coords] },
    properties: {},
  };
}

/** Check if two coordinates are within radiusM metres of each other. */
function within(a: mappedin.Coordinate, b: mappedin.Coordinate, radiusM: number): boolean {
  const dx = (a.longitude - b.longitude) * 111320 * Math.cos(a.latitude * Math.PI / 180);
  const dy = (a.latitude  - b.latitude)  * 110540;
  return Math.sqrt(dx * dx + dy * dy) < radiusM;
}

export default function DynamicRoutingDemo() {
  const { mapData, mapView } = useMap();

  const isEnabled   = useRef(false);
  const startSpace  = useRef<mappedin.Space | null>(null);
  const endSpace    = useRef<mappedin.Space | null>(null);
  const zones       = useRef<ZoneEntry[]>([]);
  const origStates  = useRef<Map<string, { color: string; hoverColor: string }>>(new Map());

  function saveOrig(space: mappedin.Space) {
    if (origStates.current.has(space.id)) return;
    const s = mapView.getState(space) as { color?: string; hoverColor?: string } | null;
    origStates.current.set(space.id, {
      color:      s?.color      ?? 'white',
      hoverColor: s?.hoverColor ?? 'lightgrey',
    });
  }

  function restoreSpace(space: mappedin.Space) {
    const orig = origStates.current.get(space.id);
    if (orig) mapView.updateState(space, orig);
  }

  const redrawRoute = useCallback(() => {
    mapView.Navigation.clear();
    if (!startSpace.current || !endSpace.current) return;

    const dirZones: mappedin.TDirectionZone[] = zones.current.map((z) => ({
      geometry: z.geoJSON,
      cost: z.type === 'closed' ? Infinity : AVOID_COST,
      floor: mapView.currentFloor,
    }));

    const directions = mapData.getDirections(
      startSpace.current,
      endSpace.current,
      { zones: dirZones },
    );
    if (directions) mapView.Navigation.draw(directions);
  }, [mapData, mapView]);

  function addZone(center: mappedin.Coordinate, type: 'avoid' | 'closed') {
    const geoJSON = makeCirclePolygon(center, ZONE_RADIUS_M);
    const color   = type === 'closed' ? COLOR_CLOSED : COLOR_AVOID;

    const shape = mapView.Shapes.add(
      { type: 'FeatureCollection', features: [geoJSON] },
      { color, opacity: 0.55 },
      mapView.currentFloor,
    );

    zones.current.push({
      id: `${Date.now()}-${Math.random()}`,
      type,
      center,
      geoJSON,
      shape,
    });

    redrawRoute();
  }

  function removeZonesNear(center: mappedin.Coordinate) {
    const remaining: ZoneEntry[] = [];
    for (const z of zones.current) {
      if (within(z.center, center, ZONE_RADIUS_M * 1.5)) {
        mapView.Shapes.remove(z.shape);
      } else {
        remaining.push(z);
      }
    }
    const changed = remaining.length !== zones.current.length;
    zones.current = remaining;
    if (changed) redrawRoute();
    return changed;
  }

  // Left-click: pick start → end → place/remove avoid zone
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

    // Try to remove a nearby zone first (toggle off); otherwise add one
    const removed = removeZonesNear(coordinate);
    if (!removed) addZone(coordinate, 'avoid');
  });

  // Right-click: place/remove closed zone
  useEvent('contextmenu', ({ coordinate }) => {
    if (!isEnabled.current || !startSpace.current || !endSpace.current) return;
    const removed = removeZonesNear(coordinate);
    if (!removed) addZone(coordinate, 'closed');
  });

  function clearAll() {
    for (const z of zones.current) mapView.Shapes.remove(z.shape);
    zones.current = [];

    if (startSpace.current) { restoreSpace(startSpace.current); startSpace.current = null; }
    if (endSpace.current)   { restoreSpace(endSpace.current);   endSpace.current   = null; }

    mapView.Navigation.clear();
  }

  function handleEnabled(enabled: boolean) {
    isEnabled.current = enabled;
    if (!enabled) clearAll();
  }

  useEffect(() => () => { if (isEnabled.current) clearAll(); }, []);

  return (
    <DemoCard
      title="Dynamic Routing"
      description="Route around avoided or closed areas"
      onEnabled={handleEnabled}
    >
      <div className="space-y-2 text-xs text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="inline-block size-3 rounded-full flex-shrink-0" style={{ backgroundColor: COLOR_START }} />
          <span>1st click on a room — set <b>start</b></span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block size-3 rounded-full flex-shrink-0" style={{ backgroundColor: COLOR_END }} />
          <span>2nd click on a room — set <b>end</b></span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block size-3 rounded-full flex-shrink-0" style={{ backgroundColor: COLOR_AVOID }} />
          <span>Left-click corridor — <b>avoid</b> zone (detour)</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block size-3 rounded-full flex-shrink-0" style={{ backgroundColor: COLOR_CLOSED }} />
          <span>Right-click corridor — <b>closed</b> zone (blocked)</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block size-3 rounded-full border border-muted-foreground/40 flex-shrink-0" />
          <span>Click existing zone — <b>remove</b> it</span>
        </div>
      </div>

      <Separator />

      <Button onClick={clearAll} variant="outline" size="sm" className="w-full gap-2">
        <RotateCcw size={13} />
        Reset
      </Button>

      <Separator />

      <p>
        <Info size="14" className="inline align-middle mr-1 text-muted-foreground" />
        <i className="text-muted-foreground text-xs">
          Zones work on open corridors, walkways, and any area — not just rooms. Route updates dynamically.
        </i>
      </p>
    </DemoCard>
  );
}
