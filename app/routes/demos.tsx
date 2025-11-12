import { ClientOnly } from '@/ClientOnly';
import HeatmapDemo from '@/components/demo-cards/HeatmapDemo';
import StackedFloorsDemo from '@/components/demo-cards/StackedFloorsDemo';
import { PageHeader } from '@/components/PageHeader';

export default function Demos() {
  return (
    <>
      <PageHeader title="Demos" />

      <div className="space-y-2">
        <ClientOnly>
          <StackedFloorsDemo />
          <HeatmapDemo />
        </ClientOnly>
        
      </div>
    </>
  );
}
