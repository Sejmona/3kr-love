import React from 'react';
import { Mapa } from '../../komponenty/Mapa';
import Stepper from '../../komponenty/Stepper';
import source from '../../source';

let progress = localStorage.getItem('progress');

if (progress === null) {
  progress = '0';
  localStorage.setItem('progress', '0');
}

export const Game = () => {
  const [userPosition, setUserPosition] = React.useState(Number(progress));
  console.log('DEBUG USER POSITON', userPosition);

  const getPosition = (entry) => {
    console.log(entry);
    if (Number(entry) >= source.length) {
      console.log('Vyhrál jso hru Tři králové');
    } else {
      setUserPosition(entry);
    }
  };

  return (
    <>
      <Stepper handleChange={getPosition} />
      <Mapa
        latitude={source[userPosition].latitude}
        longitude={source[userPosition].longitude}
      />
    </>
  );
};
