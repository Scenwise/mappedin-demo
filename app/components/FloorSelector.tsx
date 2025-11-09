import * as mappedin from '@mappedin/react-sdk';
const { useMap } = mappedin;
import { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from './ui/label';

export default function FloorSelector() {
  const { mapData, mapView } = useMap();

  const [currentFloorStackId, setCurrentFloorStackId] = useState(
    mapView.currentFloorStack.id,
  );
  const [currentFloorId, setCurrentFloorId] = useState(mapView.currentFloor.id);

  function handleFloorStackChange(floorStackId: string) {
    mapView.setFloorStack(floorStackId);
    setCurrentFloorStackId(floorStackId);
  }

  function handleFloorChange(floorId: string) {
    mapView.setFloor(floorId);
    setCurrentFloorId(floorId);
  }

  const floorStacks = mapData.getByType('floor-stack');

  const floors = floorStacks
    .find((floorStack) => floorStack.id == currentFloorStackId)
    ?.floors.sort((a, b) => a.elevation - b.elevation);

  mapView.on('floor-change', (payload) => {
    setCurrentFloorStackId(payload.floor.floorStack.id);
    setCurrentFloorId(payload.floor.id);
  });

  if (floorStacks.length < 2 && (!floors || floors.length < 2)) return null;

  return (
    <div className="flex gap-3 p-3 bg-white/70 backdrop-blur-3xl rounded-xl">
      {floorStacks.length > 1 && (
        <div className="space-y-1">
          <Label>Building</Label>
          <Select
            value={currentFloorStackId}
            onValueChange={handleFloorStackChange}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a building" />
            </SelectTrigger>
            <SelectContent>
              {floorStacks.map((floorStack) => (
                <SelectItem key={floorStack.id} value={floorStack.id}>
                  {floorStack.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}

      {floors && floors.length > 1 && (
        <div className="space-y-1">
          <Label>Floor</Label>
          <Select value={currentFloorId} onValueChange={handleFloorChange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a floor" />
            </SelectTrigger>
            <SelectContent>
              {floors?.map((floor) => (
                <SelectItem key={floor.id} value={floor.id}>
                  {floor.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}
    </div>
  );
}
