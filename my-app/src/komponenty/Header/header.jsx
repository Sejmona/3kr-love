import React from 'react';
import './header.css';

export const Header = () => {
  return (
    <div className="navigation">
      <nav className="nav-closed">
        <a href="#game">Příběh hrdinů</a>
        <a href="#rules">Pravidla hry</a>
        <a href="#gallery">Prerekvizity</a>
      </nav>
    </div>
  );
};
