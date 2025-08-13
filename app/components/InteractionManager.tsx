import { useMap } from '@mappedin/react-sdk';
import { useEffect } from 'react';

export default function InteractionManager() {
  const { mapView, mapData } = useMap();

  // Make all spaces interactive to
  // have them detected in the click event
  useEffect(() => {
    if (!mapView || !mapData) return;

    mapData
      .getByType('space')
      .filter(({ name }) => name?.length)
      .forEach((space) => {
        mapView.updateState(space, {
          interactive: true,
          hoverColor: 'lightgrey',
        });
      });
  }, [mapView, mapData]);

  return null;
}
