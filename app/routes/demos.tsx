import StackedFloorsDemo from '@/components/demo-cards/StackedFloorsDemo';

export default function Demos() {
  return (
    <>
      <div className="sticky top-0 bg-background z-10 py-2">
        <h2 className="text-lg font-semibold">Demos</h2>
      </div>

      <div>
        <StackedFloorsDemo />
      </div>
    </>
  );
}
