import React from 'react';
import './homepage.css';

import { Link, Outlet } from 'react-router-dom';
import { Header } from '../../komponenty/Header/header';
import { Footer } from '../../komponenty/Footer/footer';
import { HlavniStranka } from '../../komponenty/HlavniStranka/hlavniStranka';

export const Homepage = () => {
  return (
    <>
      <Header />
      {/*<HlavniStranka />*/}
      <Outlet />
      <Footer />
    </>
  );
};
