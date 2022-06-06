import React from 'react';
import './hlavniStranka.css';
import { Link } from 'react-router-dom';

export const HlavniStranka = () => {
  return (
    <div class="hlavicka">
      <h1>TŘI KRÁLOVÉ, HRDINOVÉ OBDOJE</h1>
      <Link to="/game">Pojď hrát</Link>
    </div>
  );
};
