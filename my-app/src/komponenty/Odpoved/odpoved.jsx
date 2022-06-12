import React from 'react';
import { Link } from 'react-router-dom';

export const Odpoved = () => {
  return (
    <div>
      <h1>odpověď</h1>
      <Link to="/game" onClick={() => window.location.reload()}>
        Další lokace
      </Link>
    </div>
  );
};
