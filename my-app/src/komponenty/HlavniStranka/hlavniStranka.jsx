import React from 'react';
import './hlavniStranka.css';
import { Link } from 'react-router-dom';
import titulek from './../../img/titulek.jpg';

export const HlavniStranka = () => {
  return (
    <div className="hlavicka">
      <h1>TŘI KRÁLOVÉ, HRDINOVÉ OBDOJE</h1>
      <h2>"Úniková hra na pomezí reality a urban legend"</h2>
      <Link to="/game">Pojď hrát</Link>
      <p>
        <img className="titulek" src={titulek} alt="Titulní nadpis" /> - tohle
        změnit na novou 3člennou bublnku pojďme hrát.
      </p>
    </div>
  );
};
