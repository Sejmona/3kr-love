import React from 'react';
import './styly.css';

const Vizitka = ({ stepData }) => {
  return (
    <>
      <div className="vizitka">{stepData.number}</div>
      <div className="vizitka">{stepData.title}</div>
      <p className="vizitka">{stepData.image}</p>
      <p className="vizitka">{stepData.description}</p>
      <p className="vizitka">{stepData.question}</p>
      <p className="vizitka">{stepData.answer}</p>
    </>
  );
};

export default Vizitka;
