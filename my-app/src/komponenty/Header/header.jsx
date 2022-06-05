import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
export const Header = () => {
  return (
    <div className="navigation">
      <nav className="nav-closed">
        <Link to="/">ABC</Link>
        {/* <Link to="/story">Příběh hrdinů</Link> */}
        <Link to="/rules">Pravidla hry</Link>
        <Link to="/gallery">Prerekvizity</Link>
      </nav>
    </div>
  );
};
