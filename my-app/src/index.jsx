import React from 'react';
import { createRoot } from 'react-dom/client';
import { Mapa } from './komponenty/Mapa';
import './style.css';
import Stepper from '../public/Komponenty/Stepper';

const App = () => (
  <div className="container">
    <header>
      <div className="logo"></div>
    </header>
    <Stepper />
    <Mapa />
    <footer></footer>
  </div>
);

createRoot(document.querySelector('#app')).render(<App />);
