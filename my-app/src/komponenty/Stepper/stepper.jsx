import React from 'react';
import StepPoint from '../StepPoint/StepPoint';
import './stepper.css';
import data from '../../source.js';

const Stepper = ({ handleChange }) => {
  const getActivStep = (indexOfStep) => {
    if (indexOfStep <= localStorage.getItem('progress')) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <div className="stepper">
      {data.map((steppoint, index) => {
        return (
          <div
            key={index}
            className={`inner_stepper${
              getActivStep(index) ? ' inner_stepper--active' : ''
            }`}
            onClick={
              getActivStep(index) ? () => handleChange(index) : undefined
            }
          >
            <StepPoint title={steppoint.title} number={steppoint.number} />
          </div>
        );
      })}
    </div>
  );
};

export default Stepper;
