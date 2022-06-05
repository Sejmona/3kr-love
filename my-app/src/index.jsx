import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { Homepage } from './pages/Homepage/homepage';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const App = () => (
  <div className="container">
    <Homepage />
  </div>
);

createRoot(document.querySelector('#app')).render(<App />);
