import React from 'react';
import './homepage.css';

import { Link, Outlet, useLocation } from 'react-router-dom';
import { Header } from '../../komponenty/Header/header';
import { Footer } from '../../komponenty/Footer/footer';
import { HlavniStranka } from '../../komponenty/HlavniStranka/hlavniStranka';

export const Homepage = () => {
  return (
    <>
      <Header />
      {useLocation().pathname === '/' ? <HlavniStranka /> : <Outlet />}
      <Footer />
    </>
  );
};
