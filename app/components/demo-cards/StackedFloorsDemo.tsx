import * as mappedin from '@mappedin/react-sdk';
const { useMap } = mappedin;
import DemoCard from './DemoCard';

export default function StackedFloorsDemo() {
  const { mapData, mapView } = useMap();

  function onEnabled(enabled: boolean) {
    if (!mapView) return;

    if (enabled) {
      mapView.StackedMaps.expand({ distanceBetweenFloors: 'auto' });
    } else {
      mapView.StackedMaps.collapse();
    }
  }

  const numberOfFloors = mapData.getByType('floor').length;

  return (
    <DemoCard
      title="Stacked floors"
      description="Show all floors on top of eachother"
      defaultEnabled={mapView.StackedMaps.state === 'expanded'}
      onEnabled={onEnabled}
      disabled={
        numberOfFloors < 2
          ? 'Choose a different map with multiple floors.'
          : undefined
      }
    />
  );
}
