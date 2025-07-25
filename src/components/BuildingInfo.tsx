import { useMap } from '@mappedin/react-sdk';
import type {
  Floor,
  FloorStack,
  Space,
} from '@mappedin/react-sdk/mappedin-js/src';
import {
  SidebarMenu,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from '@/components/ui/sidebar';
import { Building, Trees } from 'lucide-react';
import SpaceTreeCollapsible from './SpaceTreeCollapsible';
import type { JSX } from 'react/jsx-runtime';

export default function BuildingInfo() {
  const { mapData } = useMap();

  const floors = mapData
    .getByType('floor')
    .sort((a, b) => a.elevation - b.elevation);

  const floorStacks = mapData.getByType('floor-stack');

  const spaces = mapData.getByType('space');

  const spacesPerFloor = floors.map((floor) => ({
    floor,
    spaces: spaces
      .filter((space) => space.floor.id === floor.id)
      .sort((a, b) => a.name.localeCompare(b.name))
      .sort((a, b) => (a.name.length === 0 && b.name.length > 0 ? 1 : -1)), // Sort unnamed spaces to the end
  }));

  const floorsPerStack = floorStacks.map((stack) => ({
    stack,
    floors: stack.floors
      .map((floor) => spacesPerFloor.find((f) => f.floor.id === floor.id))
      .filter((f) => f !== undefined),
  }));

  const stackIcons: Record<FloorStack['type'], JSX.Element> = {
    Building: <Building />,
    Trees: <Trees />,
  };

  return (
    <div className="col-[1/2] row-[2/3] overflow-y-auto overflow-x-hidden">
      <div className="sticky top-0 bg-background z-10 py-2">
        <h2 className="text-lg font-semibold">{mapData.mapName}</h2>
      </div>

      <div className="py-2">
        <h3 className="py-2 text-md font-semibold">Spaces</h3>

        <SidebarMenu>
          {floorsPerStack.length === 1 ? (
            <FloorsTree floors={floorsPerStack[0].floors} />
          ) : (
            floorsPerStack.map(({ stack, floors }) => (
              <SpaceTreeCollapsible
                key={stack.id}
                icon={stackIcons[stack.type]}
                label={stack.name}
              >
                <FloorsTree floors={floors} />
              </SpaceTreeCollapsible>
            ))
          )}
        </SidebarMenu>
      </div>
    </div>
  );
}

function FloorsTree({
  floors,
}: {
  floors: { floor: Floor; spaces: Space[] }[];
}) {
  return floors.length === 1 ? (
    <SpacesTree spaces={floors[0].spaces} />
  ) : (
    floors.map(({ floor, spaces }) => (
      <SpaceTreeCollapsible
        key={floor.id}
        icon={
          <div className="bg-primary text-primary-foreground size-4 place-content-center grid rounded-sm text-[0.65rem]">
            {floor.elevation}
          </div>
        }
        label={floor.name}
      >
        <SpacesTree spaces={spaces} />
      </SpaceTreeCollapsible>
    ))
  );
}

function SpacesTree({ spaces }: { spaces: Space[] }) {
  const { mapView } = useMap();

  function focusOnSpace(space: Space) {
    mapView.setFloor(space.floor.id);
    mapView.Camera.focusOn(space);
  }
  return spaces.map((space) => (
    <SidebarMenuSubItem key={space.id}>
      <SidebarMenuSubButton onClick={() => focusOnSpace(space)}>
        {space.name.length ? (
          space.name
        ) : (
          <i className="text-muted-foreground">Unnamed {space.type}</i>
        )}
      </SidebarMenuSubButton>
    </SidebarMenuSubItem>
  ));
}
