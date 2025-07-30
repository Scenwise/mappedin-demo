import { useMap } from '@mappedin/react-sdk';
import DemoCard from './DemoCard';
import type { TGeometryState } from '@mappedin/react-sdk/mappedin-js/src';
import { interpolateColors } from '@/lib/interpolate-colors';
import { perlinNoise1D } from '@/lib/noise';
import { Button } from '@/components/ui/button';
import { useEffect, useRef, useState } from 'react';
import { Progress } from '../ui/progress';
import { Pause, Play, RotateCcw } from 'lucide-react';

const COLOR1 = '#fff4e6';
const COLOR2 = '#ff7c43';

export default function StackedFloorsDemo() {
  const { mapData, mapView } = useMap();

  // Store default state per space
  const defaultStates = useRef<Record<string, TGeometryState>>({});

  useEffect(() => {
    defaultStates.current = mapData.getByType('space').reduce(
      (acc, space) => {
        const state = mapView.getState(space);
        if (state) acc[space.id] = state;
        return acc;
      },
      {} as Record<string, TGeometryState>,
    );
  }, [mapData, mapView]);

  const [timestamp, setTimestamp] = useState(13.5);
  function updateSpaceColors(enabled: boolean) {
    if (!enabled) setIsPlaying(false);

    mapData.getByType('space').forEach((space) => {
      const color = enabled
        ? interpolateColors(
            COLOR1,
            COLOR2,
            perlinNoise1D(space.id, timestamp * 3),
          )
        : defaultStates.current[space.id]?.color || 'white';

      const hoverColor = enabled
        ? color
        : defaultStates.current[space.id]?.hoverColor || 'lightgrey';

      mapView.updateState(space, { color, hoverColor });
    });
  }

  const [isPlaying, setIsPlaying] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      if (timestamp == 24) {
        setIsPlaying(false);
      } else if (isPlaying) {
        setTimestamp((current) => current + 0.5);
        updateSpaceColors(true);
      }
    }, 250);
    return () => clearInterval(interval);
  });

  const handlePauseToggle = () => {
    if (timestamp == 24) setTimestamp(0);
    setIsPlaying(!isPlaying);
  };

  return (
    <DemoCard
      title="Heatmap"
      description="Show a heatmap overlay on the map"
      onEnabled={updateSpaceColors}
    >
      <Progress value={timestamp / 0.24} />

      <div className="flex items-center justify-between mt-2">
        <Button
          onClick={handlePauseToggle}
          variant="ghost"
          size="icon"
          className="size-8"
        >
          {isPlaying ? <Pause /> : timestamp == 24 ? <RotateCcw /> : <Play />}
        </Button>

        <span className="text-xs text-muted-foreground">
          {timestamp < 10 ? `0${Math.floor(timestamp)}` : Math.floor(timestamp)}
          :{timestamp == Math.floor(timestamp) ? '00' : '30'}
        </span>
      </div>
    </DemoCard>
  );
}
