import { useMap } from '@mappedin/react-sdk';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function FloorSelector() {
  const { mapData, mapView } = useMap();

  const [currentFloorId, setCurrentFloorId] = useState(mapView.currentFloor.id);

  function handleFloorChange(floorId: string) {
    mapView.setFloor(floorId);
    setCurrentFloorId(floorId);
  }

  const floors = mapData
    .getByType('floor')
    .sort((a, b) => a.elevation - b.elevation);

  return (
    <div className="flex flex-col gap-1">
      {floors.map((floor) => {
        return (
          <Button
            key={floor.id}
            value={floor.id}
            onClick={() => handleFloorChange(floor.id)}
            variant={currentFloorId === floor.id ? 'default' : 'ghost'}
          >
            {floor.name}
          </Button>
        );
      })}
    </div>
  );
}
