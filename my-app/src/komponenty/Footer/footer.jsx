import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <div className="navigation">
      <nav className="nav-closed">
        <Link to="/target">Cíl projektu</Link>
        <Link to="/partners">Partneři</Link>
        <Link to="/kontakt">Kontakt</Link>
      </nav>
    </div>
  );
};
