import React from 'react';

const StepPoint = (props) => {
  const { title, number } = props;
  return (
    <div className="steppoint__background">
      <span className="steppoint__background__title1">{title}</span>
      <span className="steppoint__background__number1">{number}</span>
    </div>
  );
};

export default StepPoint;

/* 

 const { title, number, image, description, question, answer, adress, gps }

<p className="steppoint__background__image">{image}</p>
      <p className="steppoint__background__description">{description}</p>
      <p className="steppoint__background__question">{question}</p>
      <p className="steppoint__background__answer">{answer}</p>
      <p className="steppoint__background__adress">{adress}</p>
      <p className="steppoint__background__gps">{gps}</p>


      import blesk from './../../img/blesk.png';
      <img className="steppoint__background" src={blesk} alt="blesk" 
      
      */
