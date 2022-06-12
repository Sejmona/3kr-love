import React from 'react';
import { Mapa } from '../../komponenty/Mapa';
import Stepper from '../../komponenty/Stepper/stepper';
import source from '../../source';
import { Vizitka } from '../../komponenty/Vizitka/vizitka';
import { Vyhra } from '../../komponenty/Vyhra/vyhra';

let progress = localStorage.getItem('progress');

if (progress === null) {
  progress = '0';
  localStorage.setItem('progress', '0');
}

export const Game = () => {
  const [userPosition, setUserPosition] = React.useState(Number(progress));
  const [openVizitka, setOpenVizitka] = React.useState(false);
  console.log(openVizitka);
  console.log('DEBUG USER POSITON', userPosition);

  const getPosition = (entry) => {
    console.log(entry);
    if (Number(entry) >= source.length) {
      console.log('Vyhrál jsi hru Tři králové');
    } else {
      setUserPosition(entry);
    }
  };

  return (
    <>
      <Stepper handleChange={getPosition} />
      {progress < source.length ? (
        openVizitka ? (
          <Vizitka stepData={source[userPosition]} />
        ) : (
          <Mapa
            latitude={source[userPosition].latitude}
            longitude={source[userPosition].longitude}
            handelClick={() => setOpenVizitka(!openVizitka)}
            title={source[userPosition].title}
          />
        )
      ) : (
        <Vyhra />
      )}
    </>
  );
};
