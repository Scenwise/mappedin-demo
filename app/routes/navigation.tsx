import LocationSelector from '@/components/LocationSelector';
import { PageHeader } from '@/components/PageHeader';
import { AppContext } from '@/context/AppContext';
import { useMap } from '@mappedin/react-sdk';
import { useContext, useEffect } from 'react';

export default function Navigation() {
  const { mapData, mapView } = useMap();

  const { navigationFrom, setNavigationFrom, navigationTo, setNavigationTo } =
    useContext(AppContext);

  useEffect(() => {
    if (navigationFrom && navigationTo) {
      const directions = mapData.getDirections(navigationFrom, navigationTo);

      if (!directions) return;

      // Add a path from the first space to the second space.
      mapView.Navigation.clear();
      mapView.Navigation.draw(directions);
    }
  }, [navigationFrom, navigationTo, mapData, mapView.Navigation]);

  return (
    <>
      <PageHeader title="Navigation" />

      <div className="space-y-2 py-2">
        <LocationSelector
          location={navigationFrom}
          onLocationSelect={setNavigationFrom}
        />
        <LocationSelector
          location={navigationTo}
          onLocationSelect={setNavigationTo}
        />
      </div>
    </>
  );
}
