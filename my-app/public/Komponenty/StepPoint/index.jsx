import React from 'react';

const StepPoint = (props) => {
  const { number, title } = props;
  return (
    <div className="stepper__background">
      <p className="stepper__background__number">{number}</p>
      <p className="stepper__background__title">{title}</p>
    </div>
  );
};

export default StepPoint;
