'use client';

import { AppContext } from '@/context/AppContext';
import { perlinNoise1D } from '@/lib/noise';
import { useContext } from 'react';

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from '@/components/ui/chart';
import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts';
import { formatTime } from '@/lib/format-time';
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useMap } from '@mappedin/react-sdk';
import { Button } from '../ui/button';
import { X } from 'lucide-react';

export function HeatmapWidget() {
  const { heatmapSpaceId, setHeatmapSpaceId } = useContext(AppContext);

  const { mapData } = useMap();
  const space = mapData.getById('space', heatmapSpaceId!);

  if (!space) return null;

  const chartData = Array.from({ length: 24 }, (_, i) => ({
    hour: formatTime(i),
    occupancy: Math.floor(perlinNoise1D(heatmapSpaceId!, i * 3) * 100),
  }));

  const chartConfig = {
    occupancy: {
      label: 'Occupancy',
      color: '#ff7c43',
    },
  } satisfies ChartConfig;

  return (
    <Card className="w-[200px] bg-white/70 backdrop-blur-3xl shadow-none py-3">
      <CardHeader className="items-center px-3">
        <CardTitle className="text-sm row-span-2">{space?.name}</CardTitle>
        <CardAction>
          <Button
            onClick={() => setHeatmapSpaceId(undefined)}
            variant="ghost"
            size="icon"
            className="size-8"
          >
            <X />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent className="px-3">
        <ChartContainer config={chartConfig} className="min-h-[100px] w-full">
          <AreaChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="hour"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Area
              dataKey="occupancy"
              type="step"
              fill="var(--color-occupancy)"
              fillOpacity={0.4}
              stroke="var(--color-occupancy)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
