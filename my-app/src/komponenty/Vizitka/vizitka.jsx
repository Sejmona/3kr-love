import React from 'react';
import './vizitka.css';

export const Vizitka = ({ stepData }) => {
  return (
    <>
      <div className="vizitka__page">
        <div className="vizitka__number">{stepData.number}</div>
        <div className="vizitka__title">{stepData.title2}</div>
        <p className="vizitka__description">{stepData.description}</p>
        <div className="vizitka__image">
          {stepData.image.map((item, index) => (
            <img key={index} src={`/img/s${stepData.number}/${item}`} />
          ))}

          {/*<img className="user-avatar" src={`assets/img/${props.id}.png`} />*/}
        </div>
        <p className="vizitka__nadpis">{stepData.nadpis}</p>

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
