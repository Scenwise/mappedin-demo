import React from 'react';
import MappedInMap from './Map';

import MapSelector from '@/components/MapSelector';
import { SidebarProvider } from './components/ui/sidebar';

export default function App() {
  const [mapId, setMapId] = React.useState<string>('65c0ff7430b94e3fabd5bb8c');

  return (
    <SidebarProvider>
      <div className="p-4 w-screen h-screen overflow-hidden grid grid-rows-[max-content_auto] grid-cols-[20rem_3fr_max-content] gap-4">
        <header className="flex items-center justify-between col-span-full">
          <h1 className="scroll-m-20 text-xl font-medium tracking-tight text-balance">
            Scenwise
            <span className="text-muted-foreground"> | MappedIn Demo</span>
          </h1>

          <MapSelector value={mapId} onSelect={setMapId} />
        </header>

        <MappedInMap mapId={mapId} key={mapId} />
      </div>
    </SidebarProvider>
  );
}
