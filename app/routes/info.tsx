import { useMap } from '@mappedin/react-sdk';
import type {
  Floor,
  FloorStack,
  PointOfInterest,
  Space,
} from '@mappedin/react-sdk/mappedin-js/src';
import {
  SidebarMenu,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from '@/components/ui/sidebar';
import { Building, Trees } from 'lucide-react';
import type { JSX } from 'react/jsx-runtime';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import SpaceTreeCollapsible from '@/components/SpaceTreeCollapsible';

type TabOptions = 'spaces' | 'pois';

export default function Info() {
  const { mapData } = useMap();

  const floors = mapData
    .getByType('floor')
    .sort((a, b) => a.elevation - b.elevation);

  const floorStacks = mapData.getByType('floor-stack');

  const spaces = mapData.getByType('space').filter(({ name }) => name.length);
  const pois = mapData.getByType('point-of-interest');

  const spacesPerFloor = floors.map((floor) => ({
    floor,
    spaces: spaces
      .filter((space) => space.floor.id === floor.id)
      .sort((a, b) => a.name.localeCompare(b.name))
      .sort((a, b) => (a.name.length === 0 && b.name.length > 0 ? 1 : -1)), // Sort unnamed spaces to the end
    pois: pois.filter((poi) => poi.floor.id === floor.id),
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

  const [tab, setTab] = useState<TabOptions>('spaces');

  return (
    <>
      <div className="sticky top-0 bg-background z-10 py-2">
        <h2 className="text-lg font-semibold">{mapData.mapName}</h2>
      </div>

      <div className="py-2">
        <Tabs value={tab} onValueChange={(e) => setTab(e as TabOptions)}>
          <TabsList>
            <TabsTrigger value="spaces">Spaces</TabsTrigger>
            <TabsTrigger value="pois">Points of Interest</TabsTrigger>
          </TabsList>

          <SidebarMenu>
            {floorsPerStack.length === 1 ? (
              <FloorsTree floors={floorsPerStack[0].floors} tab={tab} />
            ) : (
              floorsPerStack.map(({ stack, floors }) => (
                <SpaceTreeCollapsible
                  key={stack.id}
                  icon={stackIcons[stack.type]}
                  label={stack.name}
                >
                  <FloorsTree floors={floors} tab={tab} />
                </SpaceTreeCollapsible>
              ))
            )}
          </SidebarMenu>
        </Tabs>
      </div>
    </>
  );
}

function FloorsTree({
  floors,
  tab,
}: {
  floors: { floor: Floor; spaces: Space[]; pois: PointOfInterest[] }[];
  tab: TabOptions;
}) {
  if (floors.length === 1)
    return (
      <SpacesTree spaces={floors[0].spaces} pois={floors[0].pois} tab={tab} />
    );

  return floors
    .filter((floor) => floor[tab].length)
    .map(({ floor, spaces, pois }) => (
      <SpaceTreeCollapsible
        key={floor.id}
        icon={
          <div className="bg-primary text-primary-foreground size-4 place-content-center grid rounded-sm text-[0.65rem]">
            {floor.elevation}
          </div>
        }
        label={floor.name}
      >
        <SpacesTree spaces={spaces} pois={pois} tab={tab} />
      </SpaceTreeCollapsible>
    ));
}

function SpacesTree({
  spaces,
  pois,
  tab,
}: {
  spaces: Space[];
  pois: PointOfInterest[];
  tab: string;
}) {
  const { mapView } = useMap();
  const navigate = useNavigate();

  function focusOnSpace(space: Space | PointOfInterest) {
    mapView.setFloor(space.floor.id);
    mapView.Camera.focusOn(space);
    navigate(`/space/${space.id}`);
  }

  if (tab === 'pois')
    return pois.map((poi) => (
      <SidebarMenuSubItem key={poi.id}>
        <SidebarMenuSubButton onClick={() => focusOnSpace(poi)}>
          {poi.name} - {poi.locationProfiles.length}
        </SidebarMenuSubButton>
      </SidebarMenuSubItem>
    ));

  if (tab === 'spaces')
    return spaces.map((space) => (
      <SidebarMenuSubItem key={space.id}>
        <SidebarMenuSubButton onClick={() => focusOnSpace(space)}>
          <span>{space.name}</span>
        </SidebarMenuSubButton>
      </SidebarMenuSubItem>
    ));

  return null;
}
