import React from 'react';
import './button.css';
import pphlavniUrl from './../../../img/pphlavni.jpg';

export const Button = () => {
  return (
    <button
      className="palac"
      onClick={() => console.log('mam otevřít vizitku')}
    >
      Petchkuv palác
      <img src={pphlavniUrl} width={50} height={50} alt="Petchkuv palác" />
    </button>
  );
};
