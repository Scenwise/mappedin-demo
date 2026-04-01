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
  createHeatmapLayerFromPositions,
  calculateDistance,
} from '@/lib/heatmap-layer';

const DEFAULT_NUM_TRAVELERS = 200;
const UPDATES_PER_SECOND = 10;
const WALKING_SPEED_MPS = 4.0;
const DISTANCE_PER_UPDATE = WALKING_SPEED_MPS / UPDATES_PER_SECOND;

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

interface Traveler {
  lng: number;
  lat: number;
  segments: Segment[];
  segIndex: number;
  segProgress: number;
  destinationSpace: mappedin.Space;
  needsPath: boolean;
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

export default function LiveHeatmapDemo() {
  const { mapData, mapView } = useMap();

  const isEnabled = useRef(false);
  const isPlaying = useRef(false);
  const [playing, setPlaying] = useState(false);
  const [numTravelers, setNumTravelers] = useState(DEFAULT_NUM_TRAVELERS);

  const travelersRef = useRef<Traveler[]>([]);
  const positionsRef = useRef<Float64Array>(new Float64Array(0));
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

  function computeNewPath(traveler: Traveler, floorSpaces: mappedin.Space[]): void {
    const fromSpace = traveler.destinationSpace;
    const toSpace = pickRandomSpace(floorSpaces, fromSpace.id);
    const directions = mapData.getDirections(fromSpace, toSpace);
    if (!directions || !directions.coordinates.length) {
      traveler.needsPath = true;
      return;
    }

    const coords = directions.coordinates.map((c) => ({
      longitude: c.longitude,
      latitude: c.latitude,
    }));
    traveler.segments = buildSegments(coords);
    traveler.segIndex = 0;
    traveler.segProgress = 0;
    traveler.destinationSpace = toSpace;
    traveler.lng = coords[0].longitude;
    traveler.lat = coords[0].latitude;
    traveler.needsPath = false;
  }

  function moveTraveler(traveler: Traveler): void {
    const segs = traveler.segments;
    if (segs.length === 0) return;

    let remaining = DISTANCE_PER_UPDATE;

    while (remaining > 0 && traveler.segIndex < segs.length) {
      const seg = segs[traveler.segIndex];
      const segRemaining = (1 - traveler.segProgress) * seg.length;

      if (segRemaining <= remaining) {
        remaining -= segRemaining;
        traveler.segIndex++;
        traveler.segProgress = 0;
        if (traveler.segIndex < segs.length) {
          const next = segs[traveler.segIndex];
          traveler.lng = next.fromLng;
          traveler.lat = next.fromLat;
        } else {
          const last = segs[segs.length - 1];
          traveler.lng = last.toLng;
          traveler.lat = last.toLat;
        }
      } else {
        traveler.segProgress += remaining / seg.length;
        const t = traveler.segProgress;
        traveler.lng = seg.fromLng + (seg.toLng - seg.fromLng) * t;
        traveler.lat = seg.fromLat + (seg.toLat - seg.fromLat) * t;
        remaining = 0;
      }
    }

    if (traveler.segIndex >= segs.length) {
      traveler.segments = [];
      traveler.segIndex = 0;
      traveler.segProgress = 0;
      traveler.needsPath = true;
    }
  }

  function syncPositions(): void {
    const travelers = travelersRef.current;
    const pos = positionsRef.current;
    for (let i = 0; i < travelers.length; i++) {
      pos[i * 2] = travelers[i].lng;
      pos[i * 2 + 1] = travelers[i].lat;
    }
  }

  function updateOverlay(): void {
    if (overlayRef.current) {
      overlayRef.current.setProps({
        layers: [
          createHeatmapLayerFromPositions(
            positionsRef.current,
            travelersRef.current.length,
          ),
        ],
      });
    }
  }

  const initializeTravelers = useCallback(
    (count: number): void => {
      const floorSpaces = getFloorSpaces();
      if (floorSpaces.length < 2) return;

      const travelers: Traveler[] = [];
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
        travelers.push({
          lng: coords[0].longitude,
          lat: coords[0].latitude,
          segments,
          segIndex: 0,
          segProgress: 0,
          destinationSpace: destSpace,
          needsPath: false,
        });
      }
      travelersRef.current = travelers;
      positionsRef.current = new Float64Array(travelers.length * 2);
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

      const travelers = travelersRef.current;
      const floorSpaces = travelers.some((t) => t.needsPath)
        ? getFloorSpaces()
        : null;

      for (const t of travelers) {
        if (t.needsPath && floorSpaces && floorSpaces.length >= 2) {
          computeNewPath(t, floorSpaces);
        }
        moveTraveler(t);
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
    if (next) {
      startSimulation();
    }
  }

  function handleReset() {
    isPlaying.current = false;
    setPlaying(false);
    stopSimulation();
    initializeTravelers(numTravelers);
    updateOverlay();
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
          Travelers: {travelersRef.current.length}
        </label>
        <Slider
          defaultValue={[DEFAULT_NUM_TRAVELERS]}
          min={50}
          max={2000}
          step={50}
          onValueCommit={handleTravelerCountChange}
        />
      </div>

      <Separator />

      <p>
        <Info
          size="14"
          className="inline align-middle mr-1 text-muted-foreground"
        />
        <i className="text-muted-foreground text-xs">
          Simulated crowd movement using pathfinding between spaces.
        </i>
      </p>
    </DemoCard>
  );
}
