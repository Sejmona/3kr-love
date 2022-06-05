import React from 'react';
import { Mapa } from '../../komponenty/Mapa';
import Stepper from '../../komponenty/Stepper';
import source from '../../source';

export const Game = () => {
  const [userPosition, setUserPosition] = useState(0);
  return (
    <>
      <Stepper />
      <Mapa
        latitude={source[userPosition].latitude}
        longitude={source[userPosition].longitude}
      />
    </>
  );
};
