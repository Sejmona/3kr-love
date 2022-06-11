import React from 'react';
import './onas.css';
import klara from './../../img/klara.jpg';
import simona from './../../img/simona.jpg';

export const Onas = () => {
  return (
    <div className="onas">
      <h1>Tři králové, hrdinové odboje</h1>
      <p>Simona Šmelhausová - spoluautor hry</p>
      <img className="simona" src={simona} alt="Obrázek autorky" />
      <p> Klára Václavovíková - spoluautor hry</p>
      <img className="klara" src={klara} alt="Obrázek autorky" />
    </div>
  );
};
