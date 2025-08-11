import type { TNavigationTarget } from '@mappedin/react-sdk/mappedin-js/src/types';
import { createContext } from 'react';

type SetState<T> = React.Dispatch<React.SetStateAction<T>>;

interface AppContext {
  mapId: string;
  setMapId: SetState<string>;
  navigationFrom: TNavigationTarget | undefined;
  setNavigationFrom: SetState<TNavigationTarget | undefined>;
  navigationTo: TNavigationTarget | undefined;
  setNavigationTo: SetState<TNavigationTarget | undefined>;
  heatmapSpaceId: string | undefined;
  setHeatmapSpaceId: SetState<string | undefined>;
}

export const AppContext = createContext<AppContext>({} as AppContext);
