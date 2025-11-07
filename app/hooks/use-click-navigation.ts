import { useMapViewEvent } from '@mappedin/react-sdk';
import { useNavigate } from 'react-router';

// Navigate to the space when clicked
export default function useClickNavigation() {
  const navigate = useNavigate();
  useMapViewEvent('click', ({ spaces }) => {
    if (spaces.length) navigate(`/space/${spaces[0].id}`);
  });
}