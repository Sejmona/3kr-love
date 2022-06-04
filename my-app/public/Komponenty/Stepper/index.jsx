import React from 'react';
import StepPoint from '../StepPoint';

const Stepper = () => {
  const steppoints = [
    {
      title: 'Odbojové místo',
      number: 1,
    },
    {
      title: 'Památník',
      number: 2,
    },
    {
      title: 'Odbojové místo',
      number: 3,
    },
    {
      title: 'Památník',
      number: 4,
    },
  ];

  return (
    <div className="stepper">
      Odbojové místo
      {steppoints.map((steppoint) => {
        return (
          <StepPoint
            number={steppoint.number}
            title={steppoint.title}
            key={steppoint.number}
            background="Obrázek"
          />
        );
      })}
    </div>
  );
};

export default Stepper;
