import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { Homepage } from './pages/Homepage/homepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Game } from './pages/Game/game';
import { Pravidla } from './komponenty/Pravidla/pravidla';
import { Prerekvizity } from './komponenty/Prerekvizity/prerekvizity';
import { Kontakty } from './komponenty/Kontakty/kontakty';
import { Vizitka } from './komponenty/Vizitka'
import { Pribeh } from './komponenty/Pribeh/pribeh';


const App = () => (
  <div className="container">
    <Homepage />
  </div>
);

createRoot(document.querySelector('#app')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/rules" element={<Pravidla />} />
        <Route path="/gallery" element={<Prerekvizity />} />
        <Route path="/story" element={<Pribeh />} />

        {/*<Route path="/target" element={<CílProjektu />} />\
        <Route path="/partners" element={<Partneři />} /> />*/}
        <Route path="/kontakt" element={<Kontakty />} />
      </Route>
      <Route path="/game" element={<Game />} />
    </Routes>
  </BrowserRouter>,
);
