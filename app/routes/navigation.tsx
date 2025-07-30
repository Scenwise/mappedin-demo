import LocationSelector from '@/components/LocationSelector';
import { useMap } from '@mappedin/react-sdk';
import type { TNavigationTarget } from '@mappedin/react-sdk/mappedin-js/src/types';
import { useEffect, useState } from 'react';

export default function Navigation() {
  const { mapData, mapView } = useMap();

  const [from, setFrom] = useState<TNavigationTarget>();
  const [to, setTo] = useState<TNavigationTarget>();

  useEffect(() => {
    if (from && to) {
      const directions = mapData.getDirections(from, to);

      if (!directions) return;

      // Add a path from the first space to the second space.
      mapView.Paths.removeAll();
      mapView.Paths.add(directions.coordinates);
    }
  }, [from, to, mapData, mapView.Paths]);

  return (
    <>
      <div className="sticky top-0 bg-background z-10 py-2">
        <h2 className="text-lg font-semibold">Navigation</h2>
      </div>

      <div className="space-y-2 py-2">
        <LocationSelector onLocationSelect={setFrom} />
        <LocationSelector onLocationSelect={setTo} />
      </div>
    </>
  );
}
