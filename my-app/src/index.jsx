import React from 'react';
import { createRoot } from 'react-dom/client';
import { Mapa } from '../public/Komponenty/Mapa';
import './style.css';
import Stepper from '../public/Komponenty/Stepper';
import Vizitka from '../public/Komponenty/Vizitka';
import source from '../public/data';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';

const App = () => (
  <div className="container">
    <header>
      <div className="logo"></div>
    </header>
    <Stepper />
    <Mapa />
    <Vizitka stepData={source[0]} />
    <footer></footer>
  </div>
);

createRoot(document.querySelector('#app')).render(<App />);
