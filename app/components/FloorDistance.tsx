import * as mappedin from '@mappedin/react-sdk';
const { useMap } = mappedin;

import { Slider } from "./ui/slider";
import { useContext } from 'react';
import { AppContext } from '@/context/AppContext';

export default function FloorSelector() {
  const { mapView } = useMap();
  const { stackedFloors } = useContext(AppContext);
  

  async function handleFloorDistanceChange(aDistanceM: number[]) {
    const distanceM = aDistanceM.at(0)
    
    if(distanceM != undefined){
      console.log(distanceM)
      await mapView.StackedMaps.collapse({duration:0});
      await mapView.StackedMaps.expand({ distanceBetweenFloors: distanceM, duration:600, easing:'ease-in-out' });         
    } else {
      mapView.StackedMaps.collapse();
    }
  }

  if (!stackedFloors) return null;

  return (
    <Slider defaultValue={[20]} max={50} min={0} step={1} onValueChange={handleFloorDistanceChange}></Slider>
  );
}
