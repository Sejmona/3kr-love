import React from 'react';
import { createRoot } from 'react-dom/client';
import { Mapa } from './komponenty/Mapa';
import './style.css';

const App = () => (
  <div className="container">
    <header>
      <div className="logo"></div>
    </header>
    <Mapa />
    <footer></footer>
  </div>
);

createRoot(document.querySelector('#app')).render(<App />);
