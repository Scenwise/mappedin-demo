import { useContext } from 'react';
import MappedInMap from '@/components/MappedInMap';

import { SidebarProvider } from '@/components/ui/sidebar';
import { Outlet } from 'react-router';
import AppSidebar from '@/components/AppSidebar';
import { AppContext } from '@/context/AppContext';
import AppContextProvider from '@/context/AppContextProvider';
import MapSelector from '@/components/MapSelector';
import { ClientOnly } from '@/ClientOnly';

export default function Layout() {
  return (
    <ClientOnly>
      <AppContextProvider>
      <SidebarProvider defaultOpen={false} className="max-h-svh">
        <AppSidebar />

        <Main />
      </SidebarProvider>
    </AppContextProvider>
    </ClientOnly>
    
  );
}

function Main() {
  const { mapId, setMapId } = useContext(AppContext);

  return (
    <main className="p-4 grow overflow-hidden grid grid-rows-[2.25rem_auto] grid-cols-[20rem_3fr_max-content] gap-4">
      <div className="col-[1/2] row-[1/3]">
        <MapSelector value={mapId} onSelect={setMapId} />
      </div>
      <ClientOnly>
        <MappedInMap mapId={mapId} key={mapId}>
        <Outlet />
      </MappedInMap>
      </ClientOnly>
      
    </main>
  );
}
