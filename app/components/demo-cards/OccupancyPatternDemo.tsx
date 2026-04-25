import * as mappedin from '@mappedin/react-sdk';
const { useMap } = mappedin;
import DemoCard from './DemoCard';
import { useEffect, useRef, useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Pause, Play, RotateCcw, Info } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { perlinNoise1D } from '@/lib/noise';
import { interpolateColors } from '@/lib/interpolate-colors';
import { formatTime } from '@/lib/format-time';
import type { TGeometryState } from '@mappedin/react-sdk/mappedin-js/src';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from '@/components/ui/chart';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  ReferenceLine,
  ResponsiveContainer,
} from 'recharts';

// Color scale: low → high occupancy
const COLOR_LOW  = '#fff4e6';
const COLOR_HIGH = '#ff7c43';

// One seed offset per weekday so each day has a distinct noise pattern
const DAYS = [
  { label: 'Mon', seed: 'mon', color: '#6366f1' },
  { label: 'Tue', seed: 'tue', color: '#22c55e' },
  { label: 'Wed', seed: 'wed', color: '#f97316' },
  { label: 'Thu', seed: 'thu', color: '#3b82f6' },
  { label: 'Fri', seed: 'fri', color: '#ec4899' },
];

// Hours shown on x-axis: 0–23
const HOURS = Array.from({ length: 24 }, (_, i) => i);

/** Occupancy 0–100 for a single space at a given hour for a given day seed. */
function spaceOccupancy(spaceId: string, daySeed: string, hour: number): number {
  // Combine space id + day seed so each space has a unique-per-day pattern.
  // Multiply hour by 3 to match the existing HeatmapDemo scale.
  return perlinNoise1D(spaceId + daySeed, hour * 3);
}

/** Build the 24-point total-occupancy series for one day across all spaces. */
function buildDaySeries(
  spaces: mappedin.Space[],
  daySeed: string,
): number[] {
  return HOURS.map((h) => {
    const total = spaces.reduce(
      (sum, s) => sum + spaceOccupancy(s.id, daySeed, h),
      0,
    );
    // Normalise to 0–100 as a percentage of maximum possible (all spaces at 100%)
    return Math.round((total / spaces.length) * 100);
  });
}

const chartConfig: ChartConfig = Object.fromEntries(
  DAYS.map((d) => [d.seed, { label: d.label, color: d.color }]),
);

export default function OccupancyPatternDemo() {
  const { mapData, mapView } = useMap();

  const isEnabled   = useRef(false);
  const isPlaying   = useRef(false);
  const [playing, setPlaying]       = useState(false);
  const [currentHour, setCurrentHour] = useState(8);
  const [selectedDay, setSelectedDay] = useState(0); // index into DAYS
  const currentHourRef  = useRef(8);
  const selectedDayRef  = useRef(0);
  const intervalRef     = useRef<ReturnType<typeof setInterval> | null>(null);

  const defaultStates = useRef<Record<string, TGeometryState>>({});

  // Cache floor spaces (only named, non-exterior spaces)
  const spacesRef = useRef<mappedin.Space[]>([]);

  // Build chart data: array of { hour, mon, tue, wed, thu, fri }
  const chartData = useRef<Record<string, number | string>[]>([]);

  const buildChartData = useCallback(() => {
    const spaces = spacesRef.current;
    if (spaces.length === 0) return;
    const series = DAYS.map((d) => buildDaySeries(spaces, d.seed));
    chartData.current = HOURS.map((h) => {
      const row: Record<string, number | string> = { hour: formatTime(h) };
      DAYS.forEach((d, i) => { row[d.seed] = series[i][h]; });
      return row;
    });
  }, []);

  // Save default space states once
  const saveDefaults = useCallback(() => {
    defaultStates.current = (mapData.getByType('space') as mappedin.Space[]).reduce(
      (acc, space) => {
        const state = mapView.getState(space);
        if (state) acc[space.id] = state as TGeometryState;
        return acc;
      },
      {} as Record<string, TGeometryState>,
    );
  }, [mapData, mapView]);

  /** Apply space colors for a given day + hour snapshot. */
  const applySnapshot = useCallback((dayIdx: number, hour: number) => {
    const day = DAYS[dayIdx];
    for (const space of spacesRef.current) {
      const occ = spaceOccupancy(space.id, day.seed, hour);
      const color = interpolateColors(COLOR_LOW, COLOR_HIGH, occ);
      mapView.updateState(space, { color, hoverColor: color });
    }
  }, [mapView]);

  const restoreDefaults = useCallback(() => {
    for (const space of spacesRef.current) {
      const orig = defaultStates.current[space.id];
      if (orig) mapView.updateState(space, orig);
    }
  }, [mapView, mapData]);

  // Tick: advance hour every second when playing
  const startPlaying = useCallback(() => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      const next = (currentHourRef.current + 1) % 24;
      currentHourRef.current = next;
      setCurrentHour(next);
      applySnapshot(selectedDayRef.current, next);
    }, 600);
  }, [applySnapshot]);

  const stopPlaying = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  function handleEnabled(enabled: boolean) {
    isEnabled.current = enabled;
    if (enabled) {
      saveDefaults();
      spacesRef.current = (mapData.getByType('space') as mappedin.Space[]).filter(
        (s) => s.floor.id === mapView.currentFloor.id && s.name,
      );
      buildChartData();
      applySnapshot(selectedDayRef.current, currentHourRef.current);
    } else {
      stopPlaying();
      isPlaying.current = false;
      setPlaying(false);
      restoreDefaults();
    }
  }

  function handlePlayPause() {
    const next = !isPlaying.current;
    isPlaying.current = next;
    setPlaying(next);
    if (next) startPlaying(); else stopPlaying();
  }

  function handleReset() {
    stopPlaying();
    isPlaying.current = false;
    setPlaying(false);
    currentHourRef.current = 8;
    setCurrentHour(8);
    applySnapshot(selectedDayRef.current, 8);
  }

  function handleChartClick(data: { activePayload?: { dataKey: string }[]; activeLabel?: string }) {
    if (!isEnabled.current || !data?.activeLabel) return;
    // activeLabel is the formatted hour string e.g. "09:00"
    const hour = parseInt(data.activeLabel.split(':')[0], 10);
    stopPlaying();
    isPlaying.current = false;
    setPlaying(false);
    currentHourRef.current = hour;
    setCurrentHour(hour);
    applySnapshot(selectedDayRef.current, hour);
  }

  function handleDaySelect(idx: number) {
    selectedDayRef.current = idx;
    setSelectedDay(idx);
    if (isEnabled.current) applySnapshot(idx, currentHourRef.current);
  }

  useEffect(() => {
    saveDefaults();
    spacesRef.current = (mapData.getByType('space') as mappedin.Space[]).filter(
      (s) => s.floor.id === mapView.currentFloor.id && s.name,
    );
    buildChartData();
  }, [mapData, mapView, saveDefaults, buildChartData]);

  useEffect(() => () => { stopPlaying(); }, [stopPlaying]);

  return (
    <DemoCard
      title="Occupancy Pattern"
      description="Daily occupancy pattern across all spaces"
      onEnabled={handleEnabled}
    >
      {/* Day selector */}
      <div className="flex gap-1">
        {DAYS.map((d, i) => (
          <button
            key={d.seed}
            onClick={() => handleDaySelect(i)}
            className={`flex-1 text-xs rounded py-1 font-medium transition-colors ${
              selectedDay === i
                ? 'text-white'
                : 'bg-muted text-muted-foreground hover:bg-muted/80'
            }`}
            style={selectedDay === i ? { backgroundColor: d.color } : undefined}
          >
            {d.label}
          </button>
        ))}
      </div>

      {/* Chart */}
      <div className="w-full">
        <p className="text-[10px] text-muted-foreground mb-1">
          Total occupancy (%) — click to jump to that hour
        </p>
        <ChartContainer config={chartConfig} className="h-[120px] w-full">
          <LineChart
            data={chartData.current}
            onClick={handleChartClick}
            style={{ cursor: 'pointer' }}
          >
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis
              dataKey="hour"
              tickLine={false}
              axisLine={false}
              tickMargin={4}
              interval={5}
              tick={{ fontSize: 9 }}
            />
            <YAxis hide domain={[0, 100]} />
            <ChartTooltip content={<ChartTooltipContent />} />
            {/* All 5 day lines, selected day is thicker */}
            {DAYS.map((d, i) => (
              <Line
                key={d.seed}
                dataKey={d.seed}
                stroke={d.color}
                strokeWidth={i === selectedDay ? 2.5 : 1}
                dot={false}
                opacity={i === selectedDay ? 1 : 0.35}
              />
            ))}
            {/* Vertical marker for current hour */}
            <ReferenceLine
              x={formatTime(currentHour)}
              stroke="#1e293b"
              strokeWidth={1.5}
              strokeDasharray="4 2"
            />
          </LineChart>
        </ChartContainer>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex gap-1">
          <Button onClick={handlePlayPause} variant="ghost" size="icon" className="size-8">
            {playing ? <Pause /> : <Play />}
          </Button>
          <Button onClick={handleReset} variant="ghost" size="icon" className="size-8">
            <RotateCcw />
          </Button>
        </div>
        <span className="text-xs text-muted-foreground tabular-nums">
          {DAYS[selectedDay].label} · {formatTime(currentHour)}
        </span>
      </div>

      <Separator />

      <p>
        <Info size="14" className="inline align-middle mr-1 text-muted-foreground" />
        <i className="text-muted-foreground text-xs">
          Shows total occupancy across all spaces. Click any point on the chart to see that hour on the map.
        </i>
      </p>
    </DemoCard>
  );
}
