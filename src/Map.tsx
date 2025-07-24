import React from 'react';
import { MapView, useMapData, useMap, Label } from '@mappedin/react-sdk';
import { LoaderCircle } from 'lucide-react';
import { TypographyMuted } from './components/ui/typography/muted';

function MyCustomComponent() {
  const { mapData } = useMap();

  return mapData.getByType('space').map((space) => {
    return <Label target={space.center} text={space.name} />;
  });
}

interface MappedInMapProps {
  mapId: string;
}

export default function MappedInMap({ mapId }: MappedInMapProps) {
  // See Demo API key Terms and Conditions
  // https://developer.mappedin.com/v6/demo-keys-and-maps/
  const { isLoading, error, mapData } = useMapData({
    key: 'mik_yeBk0Vf0nNJtpesfu560e07e5',
    secret: 'mis_2g9ST8ZcSFb5R9fPnsvYhrX3RyRwPtDGbMGweCYKEq385431022',
    mapId,
  });

  if (isLoading || error) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center gap-6">
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
    <MapView mapData={mapData}>
      <MyCustomComponent />
    </MapView>
  ) : null;
}
