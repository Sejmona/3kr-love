import React from 'react';
import StepPoint from '../StepPoint/StepPoint';

import './stepper.css';
import data from '../../source.js';

const Stepper = ({ handleChange }) => {
  return (
    <div className="stepper">
      {data.map((steppoint, index) => {
        return (
          <div
            key={index}
            className="inner_stepper"
            onClick={() => {
              handleChange(index);
            }}
          >
            <StepPoint title={steppoint.title} number={steppoint.number} />
          </div>
        );
      })}
    </div>
  );
};

export default Stepper;
