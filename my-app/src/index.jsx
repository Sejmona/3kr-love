import React from 'react';
import { createRoot } from 'react-dom/client';
import { Mapa } from '../public/Komponenty/Mapa';
import './style.css';
import Stepper from '../Public/Komponenty/Stepper';

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
