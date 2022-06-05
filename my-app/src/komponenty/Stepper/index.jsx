import React from 'react';
import StepPoint from '../StepPoint';
import './styly.css';
import data from '../../data.js';

const Stepper = () => {
  return (
    <div className="stepper">
      Odbojové místo
      {data.map((steppoint) => {
        return (
          <div key={steppoint.number} className="stepper">
            <StepPoint
              title={steppoint.title}
              number={steppoint.number}
              image={steppoint.image}
              description={steppoint.description}
              question={steppoint.question}
              answer={steppoint.answer}
              adress={steppoint.adress}
              gps={steppoint.gps}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Stepper;
