import React from 'react';
import { createRoot } from 'react-dom/client';
import { Mapa } from './komponenty/Mapa';
import './style.css';
import Stepper from '../Public/Komponenty/Stepper';
import { Homepage } from './pages/Homepage/homepage';

const App = () => (
  <div className="container">
    <Homepage />
  </div>
);

createRoot(document.querySelector('#app')).render(<App />);
