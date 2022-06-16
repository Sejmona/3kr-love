import React from 'react';
import { Odpoved } from '../Odpoved/odpoved';
import './vizitka.css';

export const Vizitka = ({ stepData }) => {
  const [answer, setAnswer] = React.useState();
  const [wrongAnswer, setWrongAnswer] = React.useState(false);
  const [odpoved, setOdpoved] = React.useState(false);
  const getRightAnswer = (event) => {
    const currentPosition = Number(localStorage.getItem('progress'));
    event.preventDefault();
    if (answer === stepData.answer[0]) {
      localStorage.setItem('progress', currentPosition + 1);
      setWrongAnswer(false);
      setOdpoved(true);
    } else {
      setWrongAnswer(true);
      setOdpoved(false);
    }
  };
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
        </div>
        <p className="vizitka__nadpis">{stepData.nadpis}</p>

        <div className="form">
          <form className="question" onSubmit={getRightAnswer}>
            <p htmlFor="question">{stepData.question}</p>
            {stepData.answer.map((item, index) => (
              <label key={index}>
                <input
                  type="radio"
                  value={item}
                  checked={answer === item}
                  onChange={(e) => setAnswer(e.target.value)}
                />
                {item}
              </label>
            ))}
            <button className="submit" type="submit">
              Odeslat
            </button>
          </form>
          {wrongAnswer && <p>Špatná odpověď, zkus to ještě jednou.</p>}
        </div>
      </div>
      {odpoved && <Odpoved />}
    </>
  );
};
