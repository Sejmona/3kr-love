import React from 'react';
import './kontakty.css';
import zvonek from './../../img/zvonek.jpg';

export const Kontakty = () => {
  return (
    <div className="kontakt">
      <h1>TŘI KRÁLOVÉ, HRDINOVÉ OBDOJE</h1>
      <h2>Kontakty</h2>
      <p>
        V této sekci najdeš kontaktní email, na kterém nás zastihneš. Budeme
        totiž moc rády, když nám napíšeš, jak se Ti hra hrála, co se Ti na ní
        líbilo a naopak, co bychom mohly zlepšit, aby byl Tvůj zážitek z hry a
        poznání ještě lepší. Děkujeme.
      </p>
      <a href=" mailto:info@3kralove.cz">info@3kralove.cz</a>

      <img className="kontaktni-fotka" src={zvonek} alt="kontaktní fotka" />
    </div>
  );
};
