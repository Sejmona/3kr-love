import React from 'react';
import './kontakty.css';

export const Kontakty = () => {
  return (
    <body>
      <header className="hlava">
        <h3>TŘI KRÁLOVÉ, HRDINOVÉ OBDOJE</h3>
        <h4>Kontakty</h4>
        <p>
          V této sekci najdeš kontaktní email, na kterém nás zastihneš. Budeme
          totiž moc rády, když nám napíšeš, jak se Ti hra hrála, co se Ti na ní
          líbilo a naopak, co bychom mohly zlepšit, aby byl Tvůj zážitek z
          poznání ještě lepší.
        </p>
      </header>
      <ul className="kontakty">
        <li>
          <a href=" mailto:info@3kralove.cz">info@3kralove.cz</a>
        </li>
      </ul>
      <div className="kontaktni-fotka">
        <img src="zvonek.jpg" alt="kontaktní fotka" />
      </div>
    </body>
  );
};
