import React from 'react';
import './homepage.css';

import { Link, Outlet } from 'react-router-dom';
import { Header } from '../../komponenty/Header/header';
import { Footer } from '../../komponenty/Footer/footer';

export const Homepage = () => {
  return (
    <>
      <Header />
      <Link to="/game">Hra</Link>
      <Outlet />
      <Footer />
    </>
  );
};
