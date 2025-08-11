import { useState, type ReactNode } from 'react';
import { AppContext } from './AppContext';
import type { TNavigationTarget } from '@mappedin/react-sdk/mappedin-js/src/types';

interface AppContextProviderProps {
  children: ReactNode;
}

export default function AppContextProvider({
  children,
}: AppContextProviderProps) {
  const [mapId, setMapId] = useState<string>('65c0ff7430b94e3fabd5bb8c');
  const [navigationFrom, setNavigationFrom] = useState<TNavigationTarget>();
  const [navigationTo, setNavigationTo] = useState<TNavigationTarget>();

  return (
    <AppContext.Provider
      value={{
        mapId,
        setMapId,
        navigationFrom,
        setNavigationFrom,
        navigationTo,
        setNavigationTo,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
