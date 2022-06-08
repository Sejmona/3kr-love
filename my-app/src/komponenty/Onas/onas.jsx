import React from 'react';
import './onas.css';
import klara from './../../img/klara.jpg';
import simona from './../../img/simona.jpg';

export const Onas = () => {
  return (
    <div className="onas">
      <h1>Tři králové, hrdinové odboje</h1>
      <p>
        <img className="klara" src={klara} alt="Obrázek autorky" />
        <img className="simona" src={simona} alt="Obrázek autorky" />
      </p>
    </div>
  );
};
