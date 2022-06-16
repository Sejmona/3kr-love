import React from 'react';
import { Link } from 'react-router-dom';
import './odpoved.css';

export const Odpoved = () => {
  return (
    <div className="odpoved">
      <h1>Tvoje odpověd je správně, klikni na další adresu</h1>

      <Link to="/game" onClick={() => window.location.reload()}>
        Další adresa

      </Link>
    </div>
  );
};
