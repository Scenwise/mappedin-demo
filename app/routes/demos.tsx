import HeatmapDemo from '@/components/demo-cards/HeatmapDemo';
import LiveHeatMapDemo from '@/components/demo-cards/LiveHeatmapDemo';
import PersonalTrackingDemo from '@/components/demo-cards/PersonalTrackingDemo';
import StackedFloorsDemo from '@/components/demo-cards/StackedFloorsDemo';
import { PageHeader } from '@/components/PageHeader';

export default function Demos() {
  return (
    <>
      <PageHeader title="Demos" />

      <div className="space-y-2">
        <StackedFloorsDemo />
        <HeatmapDemo />
        <LiveHeatMapDemo />
        <PersonalTrackingDemo />
      </div>
    </>
  );
}
