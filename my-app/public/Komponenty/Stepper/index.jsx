import React from 'react';
import StepPoint from '../StepPoint';
import './styly.css';
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Caveat:wght@600&family=Lobster&display=swap');
</style>;

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
          <div key={steppoint.number} className="stepper">
            <StepPoint
              number={steppoint.number}
              title={steppoint.title}
              background="Obrázek"
            />
          </div>
        );
      })}
    </div>
  );
};

export default Stepper;
