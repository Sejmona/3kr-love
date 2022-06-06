import React from 'react';
import './styly.css';

const Vizitka = ({ stepData }) => {
  return (
    <>
      <div className="vizitka">{stepData.number}</div>
      <div className="vizitka">{stepData.title}</div>
      <p className="vizitka">{stepData.image}</p>
      <p className="vizitka">{stepData.description}</p>

      <form>
        <label htmlFor="question">{stepData.question}</label>
        <select id="question" name="question">
          {stepData.answer.map(({ item, index }) => {
            <option value={index}>{item}</option>;
          })}
        </select>
      </form>
    </>
  );
};

export default Vizitka;
