import React from 'react';
import './button.css';

export const Button = ({ handleChange }) => {
  return (
    <button className="palac" onClick={handleChange}>
      Petschkův palác - sídlo gestapa 1939
    </button>
  );
};
