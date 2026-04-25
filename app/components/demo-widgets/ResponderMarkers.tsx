import * as mappedin from '@mappedin/react-sdk';
const { useMap, Marker } = mappedin;
import { useContext } from 'react';
import { AppContext } from '@/context/AppContext';

export function ResponderMarkers() {
  const { mapData } = useMap();
  const { trackedResponders } = useContext(AppContext);

  if (trackedResponders.length === 0) return null;

  return (
    <>
      {trackedResponders.map((r) => {
        const coord = mapData.createCoordinate(r.latitude, r.longitude);
        return (
          <Marker key={r.id} target={coord}>
            <div className="flex flex-col items-center pointer-events-none select-none">
              <div
                className="rounded-full border-[3px] border-white shadow-lg"
                style={{
                  width: 20,
                  height: 20,
                  backgroundColor: r.color,
                  boxShadow: `0 0 0 3px ${r.color}40, 0 2px 8px rgba(0,0,0,0.3)`,
                }}
              />
              <div className="mt-1 text-center whitespace-nowrap">
                <div className="text-[11px] font-bold leading-tight text-gray-900 drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">
                  {r.name}
                </div>
                <div className="text-[10px] leading-tight text-gray-600 drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">
                  {r.role}
                </div>
              </div>
            </div>
          </Marker>
        );
      })}
    </>
  );
}