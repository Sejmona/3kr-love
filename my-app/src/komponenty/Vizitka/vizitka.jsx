import React from 'react';
import './vizitka.css';

export const Vizitka = ({ stepData }) => {
  return (
    <>
      <div className="vizitka__page">
        <div className="vizitka__number">{stepData.number}</div>
        <div className="vizitka__title">{stepData.title}</div>
        <p className="vizitka__description">{stepData.description}</p>
        <p className="vizitka__image">{stepData.image}</p>
        <p className="vizitka__address">{stepData.address}</p>

        <div className="form">
          <form>
            <label htmlFor="question">{stepData.question}</label>
            <select id="question" name="question">
              {stepData.answer.map((item, index) => (
                <option value={index}>{item}</option>
              ))}
            </select>
          </form>
        </div>
      </div>
    </>
  );
};
