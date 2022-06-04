import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import Stepper from '../Public/Komponenty/Stepper';

const App = () => (
  <div className="Container">
    <Stepper />
  </div>
);

createRoot(document.querySelector('#app')).render(<App />);
