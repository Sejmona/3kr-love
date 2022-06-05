import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { Homepage } from './pages/Homepage/homepage
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => (
  <div className="container">
    <Homepage />
  </div>
);

createRoot(document.querySelector('#app')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/game" element={<Pribeh />} />
      <Route path="/rules" element={<Pravidla />} />
      <Route path="/gallery" element={<Prerekvizity />} />
      {/*<Route path="/target" element={<CílProjektu />} />\*/}
      <Route path="/partners" element={<Partneři />} />
      <Route path="/kontakt" element={<Kontakty />} />
    </Routes>
  </BrowserRouter>,
);
