import React from 'react';
import './button.css';

export const Button = ({ handleChange }) => {
  return (
    <button className="palac" onClick={handleChange}>
      {/*<div className="vizitka__title">{handleChange.map(title)}</div>*/}
    </button>
  );
};
