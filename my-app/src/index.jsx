import React from 'react';
import { createRoot } from 'react-dom/client';
import { Mapa } from './komponenty/Mapa';
import './style.css';
import { Homepage } from './pages/Homepage/homepage';
import Stepper from '../public/Komponenty/Stepper';
 
const App = () => (
  <div className="container">
    <Homepage />
  </div>
);

createRoot(document.querySelector('#app')).render(<App />);
