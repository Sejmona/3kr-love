import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <div className="menu">
      <nav className="menu-closed">
        <Link to="/target">O nás</Link>
        <Link to="/podekovani">Poděkování</Link>
        <Link to="/kontakt">Kontakty</Link>
      </nav>
    </div>
  );
};
