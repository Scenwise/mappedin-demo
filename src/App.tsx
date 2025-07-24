import React from 'react';
import MappedInMap from './Map';

import MapSelector from '@/components/MapSelector';

export default function App() {
  const [mapId, setMapId] = React.useState<string>('65c0ff7430b94e3fabd5bb8c');

  return (
    <div className="p-4 w-screen h-screen grid grid-rows-[max-content_auto] grid-cols-[auto_36px] gap-4">
      <header className="flex items-center justify-between col-span-2">
        <h1 className="scroll-m-20 text-xl font-medium tracking-tight text-balance">
          Scenwise
          <span className="text-muted-foreground"> | MappedIn Demo</span>
        </h1>

        <MapSelector value={mapId} onSelect={setMapId} />
      </header>

      <MappedInMap mapId={mapId} key={mapId} />
    </div>
  );
}
