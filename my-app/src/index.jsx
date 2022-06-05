import React from 'react';
import { createRoot } from 'react-dom/client';
<<<<<<< Updated upstream
import { Mapa } from '../public/Komponenty/Mapa';
=======
>>>>>>> Stashed changes
import './style.css';
<<<<<<< HEAD
import { Homepage } from './pages/Homepage/homepage';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';

const App = () => (
  <div className="container">
    <Homepage />
=======
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
>>>>>>> Stepper
  </div>
);

createRoot(document.querySelector('#app')).render(<App />);
