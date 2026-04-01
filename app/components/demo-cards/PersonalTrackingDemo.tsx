import * as mappedin from '@mappedin/react-sdk';
const { useMap } = mappedin;
import DemoCard from './DemoCard';
import { useEffect, useRef, useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Pause, Play, RotateCcw, Info } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Slider } from '@/components/ui/slider';
import { MapboxOverlay } from '@deck.gl/mapbox';
import {
  createTrackingDotsLayer,
  createTrackingLabelsLayer,
  calculateDistance,
} from '@/lib/heatmap-layer';

const DEFAULT_NUM_DOTS = 50;
const UPDATES_PER_SECOND = 10;
const WALKING_SPEED_MPS = 3.0;
const DISTANCE_PER_UPDATE = WALKING_SPEED_MPS / UPDATES_PER_SECOND;

type Role = 'cleaner' | 'manager' | 'technician';

const ROLES: Role[] = ['cleaner', 'manager', 'technician'];

// RGBA colors per role
const ROLE_COLORS: Record<Role, [number, number, number, number]> = {
  cleaner:    [34,  197,  94, 220],  // green
  manager:    [239, 68,   68, 220],  // red
  technician: [234, 179,   8, 220],  // yellow
};

const ROLE_LABELS: Record<Role, string> = {
  cleaner:    'Cleaner',
  manager:    'Manager',
  technician: 'Technician',
};

interface PathPoint {
  longitude: number;
  latitude: number;
}

interface Segment {
  fromLng: number;
  fromLat: number;
  toLng: number;
  toLat: number;
  length: number;
}

interface TrackedPerson {
  lng: number;
  lat: number;
  segments: Segment[];
  segIndex: number;
  segProgress: number;
  destinationSpace: mappedin.Space;
  needsPath: boolean;
  role: Role;
}

function pickRandomSpace(
  spaces: mappedin.Space[],
  excludeId?: string,
): mappedin.Space {
  const pool = excludeId ? spaces.filter((s) => s.id !== excludeId) : spaces;
  return pool[Math.floor(Math.random() * pool.length)];
}

function buildSegments(coords: PathPoint[]): Segment[] {
  const segments: Segment[] = [];
  for (let i = 0; i < coords.length - 1; i++) {
    const from = coords[i];
    const to = coords[i + 1];
    segments.push({
      fromLng: from.longitude,
      fromLat: from.latitude,
      toLng: to.longitude,
      toLat: to.latitude,
      length: calculateDistance(from, to),
    });
  }
  return segments;
}

export default function PersonalTrackingDemo() {
  const { mapData, mapView } = useMap();

  const isEnabled = useRef(false);
  const isPlaying = useRef(false);
  const [playing, setPlaying] = useState(false);
  const [numDots, setNumDots] = useState(DEFAULT_NUM_DOTS);

  const peopleRef = useRef<TrackedPerson[]>([]);
  const positionsRef = useRef<Float64Array>(new Float64Array(0));
  const colorsRef = useRef<Uint8Array>(new Uint8Array(0));
  const labelsRef = useRef<string[]>([]);
  const frameRef = useRef<number>(0);
  const overlayRef = useRef<MapboxOverlay | null>(null);
  const rafRef = useRef<number | null>(null);
  const lastTickRef = useRef<number>(0);

  const getFloorSpaces = useCallback((): mappedin.Space[] => {
    return mapData
      .getByType('space')
      .filter(
        (s) => s.floor.id === mapView.currentFloor.id,
      ) as mappedin.Space[];
  }, [mapData, mapView]);

  function computeNewPath(person: TrackedPerson, floorSpaces: mappedin.Space[]): void {
    const fromSpace = person.destinationSpace;
    const toSpace = pickRandomSpace(floorSpaces, fromSpace.id);
    const directions = mapData.getDirections(fromSpace, toSpace);
    if (!directions || !directions.coordinates.length) {
      person.needsPath = true;
      return;
    }

    const coords = directions.coordinates.map((c) => ({
      longitude: c.longitude,
      latitude: c.latitude,
    }));
    person.segments = buildSegments(coords);
    person.segIndex = 0;
    person.segProgress = 0;
    person.destinationSpace = toSpace;
    person.lng = coords[0].longitude;
    person.lat = coords[0].latitude;
    person.needsPath = false;
  }

  function movePerson(person: TrackedPerson): void {
    const segs = person.segments;
    if (segs.length === 0) return;

    let remaining = DISTANCE_PER_UPDATE;

    while (remaining > 0 && person.segIndex < segs.length) {
      const seg = segs[person.segIndex];
      const segRemaining = (1 - person.segProgress) * seg.length;

      if (segRemaining <= remaining) {
        remaining -= segRemaining;
        person.segIndex++;
        person.segProgress = 0;
        if (person.segIndex < segs.length) {
          const next = segs[person.segIndex];
          person.lng = next.fromLng;
          person.lat = next.fromLat;
        } else {
          const last = segs[segs.length - 1];
          person.lng = last.toLng;
          person.lat = last.toLat;
        }
      } else {
        person.segProgress += remaining / seg.length;
        const t = person.segProgress;
        person.lng = seg.fromLng + (seg.toLng - seg.fromLng) * t;
        person.lat = seg.fromLat + (seg.toLat - seg.fromLat) * t;
        remaining = 0;
      }
    }

    if (person.segIndex >= segs.length) {
      person.segments = [];
      person.segIndex = 0;
      person.segProgress = 0;
      person.needsPath = true;
    }
  }

  function syncPositions(): void {
    const people = peopleRef.current;
    const pos = positionsRef.current;
    for (let i = 0; i < people.length; i++) {
      pos[i * 2] = people[i].lng;
      pos[i * 2 + 1] = people[i].lat;
    }
  }

  function updateOverlay(): void {
    if (overlayRef.current) {
      frameRef.current += 1;
      overlayRef.current.setProps({
        layers: [
          createTrackingDotsLayer(
            positionsRef.current,
            peopleRef.current.length,
            colorsRef.current,
          ),
          createTrackingLabelsLayer(
            positionsRef.current,
            labelsRef.current,
            frameRef.current,
          ),
        ],
      });
    }
  }

  const initializePeople = useCallback(
    (count: number): void => {
      const floorSpaces = getFloorSpaces();
      if (floorSpaces.length < 2) return;

      const people: TrackedPerson[] = [];
      for (let i = 0; i < count; i++) {
        const startSpace = pickRandomSpace(floorSpaces);
        const destSpace = pickRandomSpace(floorSpaces, startSpace.id);
        const directions = mapData.getDirections(startSpace, destSpace);
        if (!directions || !directions.coordinates.length) continue;

        const coords = directions.coordinates.map((c) => ({
          longitude: c.longitude,
          latitude: c.latitude,
        }));
        const segments = buildSegments(coords);
        const role = ROLES[i % ROLES.length];
        people.push({
          lng: coords[0].longitude,
          lat: coords[0].latitude,
          segments,
          segIndex: 0,
          segProgress: 0,
          destinationSpace: destSpace,
          needsPath: false,
          role,
        });
      }
      peopleRef.current = people;
      positionsRef.current = new Float64Array(people.length * 2);

      const colors = new Uint8Array(people.length * 4);
      for (let i = 0; i < people.length; i++) {
        const [r, g, b, a] = ROLE_COLORS[people[i].role];
        colors[i * 4]     = r;
        colors[i * 4 + 1] = g;
        colors[i * 4 + 2] = b;
        colors[i * 4 + 3] = a;
      }
      colorsRef.current = colors;
      labelsRef.current = people.map((p) => ROLE_LABELS[p.role]);

      syncPositions();
    },
    [mapData, getFloorSpaces],
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

      const people = peopleRef.current;
      const floorSpaces = people.some((p) => p.needsPath)
        ? getFloorSpaces()
        : null;

      for (const p of people) {
        if (p.needsPath && floorSpaces && floorSpaces.length >= 2) {
          computeNewPath(p, floorSpaces);
        }
        movePerson(p);
      }
      syncPositions();
      updateOverlay();

      rafRef.current = requestAnimationFrame(tick);
    },
    [getFloorSpaces],
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

    const overlay = new MapboxOverlay({
      interleaved: false,
      layers: [],
    });
    map.addControl(overlay as unknown as Parameters<typeof map.addControl>[0]);
    overlayRef.current = overlay;
  }, [mapView]);

  const removeOverlay = useCallback(() => {
    if (overlayRef.current) {
      const map = mapView.Outdoor?.map;
      if (map) {
        try {
          map.removeControl(
            overlayRef.current as unknown as Parameters<
              typeof map.removeControl
            >[0],
          );
        } catch {
          // overlay already removed
        }
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
      initializePeople(numDots);
      updateOverlay();
      isPlaying.current = true;
      setPlaying(true);
      startSimulation();
    } else {
      isPlaying.current = false;
      setPlaying(false);
      stopSimulation();
      peopleRef.current = [];
      positionsRef.current = new Float64Array(0);
      colorsRef.current = new Uint8Array(0);
      labelsRef.current = [];
      updateOverlay();
      removeOverlay();
    }
  }

  function handlePlayPause() {
    const next = !isPlaying.current;
    isPlaying.current = next;
    setPlaying(next);
    if (next) {
      startSimulation();
    }
  }

  function handleReset() {
    isPlaying.current = false;
    setPlaying(false);
    stopSimulation();
    initializePeople(numDots);
    updateOverlay();
  }

  function handleDotCountChange(value: number[]) {
    const count = value[0];
    setNumDots(count);
    if (isEnabled.current) {
      const wasPlaying = isPlaying.current;
      isPlaying.current = false;
      stopSimulation();
      initializePeople(count);
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
      title="Personal Tracking"
      description="Track individual people moving through the building"
      onEnabled={handleEnabled}
    >
      <div className="flex items-center gap-2">
        <Button
          onClick={handlePlayPause}
          variant="ghost"
          size="icon"
          className="size-8"
        >
          {playing ? <Pause /> : <Play />}
        </Button>
        <Button
          onClick={handleReset}
          variant="ghost"
          size="icon"
          className="size-8"
        >
          <RotateCcw />
        </Button>
      </div>

      <Separator />

      <div className="space-y-1">
        <label className="text-xs text-muted-foreground">
          People: {peopleRef.current.length}
        </label>
        <Slider
          defaultValue={[DEFAULT_NUM_DOTS]}
          min={5}
          max={200}
          step={5}
          onValueCommit={handleDotCountChange}
        />
      </div>

      <Separator />

      <div className="space-y-1">
        <label className="text-xs text-muted-foreground">Legend</label>
        <div className="flex flex-col gap-1">
          {ROLES.map((role) => {
            const [r, g, b] = ROLE_COLORS[role];
            return (
              <div key={role} className="flex items-center gap-2">
                <span
                  className="inline-block size-3 rounded-full border border-white/60"
                  style={{ backgroundColor: `rgb(${r},${g},${b})` }}
                />
                <span className="text-xs">{ROLE_LABELS[role]}</span>
              </div>
            );
          })}
        </div>
      </div>

      <Separator />

      <p>
        <Info
          size="14"
          className="inline align-middle mr-1 text-muted-foreground"
        />
        <i className="text-muted-foreground text-xs">
          Simulated individual tracking with pathfinding between spaces.
        </i>
      </p>
    </DemoCard>
  );
}
