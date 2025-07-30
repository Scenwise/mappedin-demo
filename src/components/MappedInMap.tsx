import {
  MapView,
  useMapData,
  useMap,
  Label,
  Marker,
} from '@mappedin/react-sdk';
import {
  BusFront,
  DoorOpen,
  Icon,
  LoaderCircle,
  ShieldUser,
  TriangleRight,
} from 'lucide-react';
import { TypographyMuted } from './ui/typography/muted';
import FloorSelector from './FloorSelector';
import InteractionManager from './InteractionManager';
import { cloneElement, type JSX } from 'react';
import {
  stairsArrowUpRight,
  escalatorArrowUpRight,
  chevronsUpDownSquare,
} from '@lucide/lab';
import type { Connection } from '@mappedin/react-sdk/mappedin-js/src';

function MyCustomComponent() {
  const { mapData } = useMap();

  return [
    ...mapData
      .getByType('space')
      .filter(({ name }) => name.length)
      .map((space) => {
        return (
          <Label
            target={space.center}
            text={space.name}
            options={{ interactive: true }}
          />
        );
      }),
    ...mapData.getByType('point-of-interest').map((poi) => {
      return (
        <Label
          target={poi.anchorTarget}
          text={poi.name}
          options={{ interactive: true }}
        />
      );
    }),
  ];
}

function ConnectionMarkers() {
  const { mapData } = useMap();

  const connections = mapData.getByType('connection');

  const connectionIcons: { [key in Connection['type']]?: JSX.Element } = {
    door: <DoorOpen />,
    stairs: <Icon iconNode={stairsArrowUpRight} />,
    escalator: <Icon iconNode={escalatorArrowUpRight} />,
    elevator: <Icon iconNode={chevronsUpDownSquare} />,
    ramp: <TriangleRight />,
    slide: <TriangleRight />,
    portal: <TriangleRight />,
    security: <ShieldUser />,
    shuttle: <BusFront />,
  };

  return connections.map((connection) => {
    const ConnectionIcon = connectionIcons[connection.type]!;
    return (
      <Marker key={connection.id} target={connection.coordinates[0]}>
        <div className="bg-primary text-primary-foreground flex rounded-sm py-1 px-2 gap-2 items-center">
          {ConnectionIcon && cloneElement(ConnectionIcon, { size: 14 })}
          {connection.name.length ? connection.name : connection.type}
        </div>
      </Marker>
    );
  });
}

interface MappedInMapProps {
  mapId: string;
  children?: React.ReactNode;
}

export default function MappedInMap({ mapId, children }: MappedInMapProps) {
  // See Demo API key Terms and Conditions
  // https://developer.mappedin.com/v6/demo-keys-and-maps/
  const { isLoading, error, mapData } = useMapData({
    key: 'mik_yeBk0Vf0nNJtpesfu560e07e5',
    secret: 'mis_2g9ST8ZcSFb5R9fPnsvYhrX3RyRwPtDGbMGweCYKEq385431022',
    mapId,
  });

  if (isLoading || error) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center gap-6 bg-(--sidebar) rounded-2xl overflow-hidden col-[2/3] row-[2/3]">
        {isLoading && (
          <>
            <LoaderCircle size={32} className="animate-spin" />
            <TypographyMuted>Loading map</TypographyMuted>
          </>
        )}
        {error && <span className="text-red-500">{error.message}</span>}
      </div>
    );
  }

  return mapData ? (
    <MapView
      mapData={mapData}
      className="w-full h-full bg-(--sidebar) rounded-2xl overflow-hidden col-[2/3] row-[2/3] ring ring-gray-100"
    >
      <MyCustomComponent />
      <InteractionManager />
      <ConnectionMarkers />

      {/* The following components will be siblings to the map, not children */}
      <aside className="col-[1/2] row-[2/3] overflow-y-auto overflow-x-hidden">
        {children}
      </aside>

      <nav className="col-[3/4] row-[2/3] overflow-y-auto">
        <FloorSelector />
      </nav>
    </MapView>
  ) : null;
}
