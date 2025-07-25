import { useEvent, useMap } from '@mappedin/react-sdk';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

export default function InteractionManager() {
  const { mapView, mapData } = useMap();

  // Make all spaces interactive to
  // have them detected in the click event
  useEffect(() => {
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

  // Navigate to the space when clicked
  const navigate = useNavigate();
  useEvent('click', ({ spaces }) => {
    if (spaces.length) navigate(`/space/${spaces[0].id}`);
  });

  return null;
}
