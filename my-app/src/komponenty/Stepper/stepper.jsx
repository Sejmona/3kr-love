import React from 'react';
import StepPoint from '../StepPoint/StepPoint';
import './stepper.css';
import data from '../../source.js';

const Stepper = ({ handleChange }) => {
  return (
    <div className="stepper">
      Odbojové místo
      {data.map((steppoint, index) => {
        return (
          <div
            key={index}
            className="stepper"
            onClick={() => {
              handleChange(index);
            }}
          >
            <StepPoint
              title={steppoint.title}
              number={steppoint.number}
              //image={steppoint.image}
              //description={steppoint.description}
              //question={steppoint.question}
              //answer={steppoint.answer}
              //adress={steppoint.adress}
              //gps={steppoint.gps}//
            />
          </div>
        );
      })}
    </div>
  );
};

export default Stepper;
