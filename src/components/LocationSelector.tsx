import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useEvent, useMap } from '@mappedin/react-sdk';
import type { TNavigationTarget } from '@mappedin/react-sdk/mappedin-js/src/types';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Locate, LocateOff } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import type { Coordinate } from '@mappedin/react-sdk/mappedin-js/src';

interface LocationSelectorProps {
  onLocationSelect: (target: TNavigationTarget) => void;
}

export default function LocationSelector({
  onLocationSelect,
}: LocationSelectorProps) {
  const { mapData } = useMap();

  const floors = mapData
    .getByType('floor')
    .sort((a, b) => a.elevation - b.elevation);

  // const floorStacks = mapData.getByType('floor-stack');

  const spaces = mapData.getByType('space').filter(({ name }) => name.length);

  const spacesPerFloor = floors.map((floor) => ({
    floor,
    spaces: spaces
      .filter((space) => space.floor.id === floor.id)
      .sort((a, b) => a.name.localeCompare(b.name)),
  }));

  const [spaceId, setSpaceId] = useState<string>('');
  const [coordinate, setCoordinate] = useState<Coordinate>();

  function handleSpaceSelect(spaceId: string) {
    setSpaceId(spaceId);
    setCoordinate(undefined);
    const space = spaces.find(({ id }) => id === spaceId);
    if (space) onLocationSelect(space);
  }

  const [clickSelectEnabled, setClickSelectEnabled] = useState(false);
  useEvent('click', ({ spaces, coordinate }) => {
    if (clickSelectEnabled) {
      if (spaces.length) {
        handleSpaceSelect(spaces[0].id);
      } else {
        setSpaceId(' ');
        setCoordinate(coordinate);
        onLocationSelect(coordinate);
      }
      setClickSelectEnabled(false);
    }
  });

  return (
    <div className="flex items-center gap-2 w-full *:min-w-0">
      <Select value={spaceId} onValueChange={handleSpaceSelect}>
        <SelectTrigger className="grow">
          <SelectValue placeholder="Select a space" className="truncate">
            {coordinate
              ? coordinate.latitude + ' ' + coordinate.longitude
              : spaces.find(({ id }) => id === spaceId)?.name}
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          {spacesPerFloor.map(({ floor, spaces }) => (
            <SelectGroup key={floor.id}>
              <SelectLabel>{floor.name}</SelectLabel>

              {spaces.map((space) => (
                <SelectItem key={space.id} value={space.id}>
                  {space.name}
                </SelectItem>
              ))}
            </SelectGroup>
          ))}
        </SelectContent>
      </Select>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            size="icon"
            variant="ghost"
            className="size-8 shrink-0"
            onClick={() => setClickSelectEnabled(!clickSelectEnabled)}
          >
            {clickSelectEnabled ? <LocateOff /> : <Locate />}
          </Button>
        </TooltipTrigger>

        <TooltipContent side="right">Select on map</TooltipContent>
      </Tooltip>
    </div>
  );
}
