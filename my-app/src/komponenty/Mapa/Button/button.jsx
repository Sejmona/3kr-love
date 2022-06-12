import React from 'react';
import './button.css';

export const Button = ({ title, handleChange }) => {
  return (
    <button className="palac" onClick={handleChange}>
      <h2>{title}</h2>
    </button>
  );
};
