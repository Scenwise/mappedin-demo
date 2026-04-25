import HeatmapDemo from '@/components/demo-cards/HeatmapDemo';
import LiveHeatmapDemo from '@/components/demo-cards/LiveHeatmapDemo';
import PersonalTrackingDemo from '@/components/demo-cards/PersonalTrackingDemo';
import StackedFloorsDemo from '@/components/demo-cards/StackedFloorsDemo';
import DynamicRoutingDemo from '@/components/demo-cards/DynamicRoutingDemo';
import OccupancyPatternDemo from '@/components/demo-cards/OccupancyPatternDemo';
import DynamicRoutingLiveHeatMap from '@/components/demo-cards/DynamicRoutingLiveHeatMap';
import { PageHeader } from '@/components/PageHeader';

export default function Demos() {
  return (
    <>
      <PageHeader title="Demos" />

      <div className="space-y-2">
        <StackedFloorsDemo />
        <HeatmapDemo />
        <OccupancyPatternDemo />
        <LiveHeatmapDemo />
        <PersonalTrackingDemo />
        <DynamicRoutingDemo />
        <DynamicRoutingLiveHeatMap />
      </div>
    </>
  );
}
