import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import logo from './../../img/logo.jpg';
export const Header = () => {
  return (
    <div className="menu">
      <Link to="/">
        <img className="button-tlacitka" src={logo} />
      </Link>

      <nav className="menu-closed">
        <Link to="/story">Příběh hrdinů</Link>
        <Link to="/rules">Pravidla hry</Link>
        <Link to="/gallery">Prerekvizity</Link>
      </nav>
    </div>
  );
};
