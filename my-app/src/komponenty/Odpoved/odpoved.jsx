import React from 'react';
import { Link } from 'react-router-dom';
import './odpoved.css';

export const Odpoved = () => {
  return (
    <div className="odpoved">
      <h1>Správně si odpověděl</h1>
      <Link to="/game" onClick={() => window.location.reload()}>
        Další lokace
      </Link>
    </div>
  );
};
