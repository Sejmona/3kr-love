import React from 'react';

const StepPoint = (props) => {
  const { title, number, image, description, question, answer, adress, gps } =
    props;
  return (
    <div className="stepper__background">
      <p className="stepper__background__title">{title}</p>
      <p className="stepper__background__number">{number}</p>
      <p className="stepper__background__image">{image}</p>
      <p className="stepper__background__description">{description}</p>
      <p className="stepper__background__question">{question}</p>
      <p className="stepper__background__answer">{answer}</p>
      <p className="stepper__background__adress">{adress}</p>
      <p className="stepper__background__gps">{gps}</p>
    </div>
  );
};

export default StepPoint;
