import React from 'react';
import './homepage.css';
import { Header } from '../../komponenty/Header/header';
import { Footer } from '../../komponenty/Footer/footer';
import { Link } from 'react-router-dom';

export const Homepage = () => {
  return (
    <>
      <Header />
      <Link to="/game">Hra</Link>
      <Footer />
    </>
  );
};
