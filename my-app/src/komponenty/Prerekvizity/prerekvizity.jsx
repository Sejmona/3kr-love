import React from 'react';
import './prerekvizity.css';

export const Prerekvizity = () => {
  return (
    <body>
      <h1>Tři králové, hrdinové odboje</h1>
      <p>
        {' '}
        My, na rozdíl od trýznitelů našich hrdinů, se Ti pokusíme hru ulehčit, a
        proto Ti hned na začátku pozradíme, co by si mohl při hře potřebovat,
        aby se zvýšila šance, že z ní vyvázneš živ:
      </p>
      <h2>Prerekvizity</h2>
      <ul className="Prerekvizity">
        <li>mobil s GPS</li>
        <li>powerbanka</li>
        <li>kreditní karta</li>
        <li>tužka</li>
        <li>papír</li>
        <li>svačina</li>
        <li>voda</li>
      </ul>
      <div className="prerekvizitni-fotka">
        <img src="prerekvizity.jpg" alt="prerekvizitni fotka" />
      </div>
    </body>
  );
};
