import React from 'react';
import MappedInMap from './Map';

import MapSelector from '@/components/MapSelector';

export default function App() {
  const [mapId, setMapId] = React.useState<string>('65c0ff7430b94e3fabd5bb8c');

  return (
    <div className="p-4 w-screen h-screen grid grid-rows-[max-content_auto] grid-cols-[1fr] gap-4">
      <header className="flex items-center justify-between">
        <h1 className="scroll-m-20 text-xl font-medium tracking-tight text-balance">
          Scenwise{' '}
          <span className="text-muted-foreground">| MappedIn Demo</span>
        </h1>

        <MapSelector value={mapId} onSelect={setMapId} />
      </header>

      <main className="w-full h-full bg-(--sidebar) rounded-2xl overflow-hidden">
        <MappedInMap mapId={mapId} key={mapId} />
      </main>
    </div>
  );
}
