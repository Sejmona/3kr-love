import React from 'react';
import './partneri.css';
import partneri from './../../img/partneri.jpg';

export const Podekovani = () => {
  return (
    <div className="partneri">
      <h1>TŘI KRÁLOVÉ, HRDINOVÉ OBDOJE</h1>
      <h2>Poděkování</h2>
      Velice bychom chtěli poděkovat za spolupráci lidem, bez kterých by tato
      hra nevznikla. Zdeněk Ležák, autor textu komiksu Tři králové, který nám
      umožnil použít jejich grafiku v naší hře a věnoval nám spousty času s
      vybíráním zásadních míst pro hru. Blanka Semanová – náš mentor, učitelka
      Reactu, výborná poradkyně a mentorka i bez ní by hra vznikla velice těžko.
      Jakub Fišer – náš druhý mentor, který byl velkou knihovnou a věnoval
      tomuto projektu hodně času a bez něj by velice těžko tato hra vznikla.
      Czechitas – akademie a její mentoři Filip Chalupa, Filip Jirsák, Martin
      Podloucký, Natálie Rydzá a další bez kterých bychom nikdy nebyli kodérky.
      Petr Šmelhaus – on celý příběh vymyslel a konzultoval s námi. Byl nám
      velikou oporou a touto cestou bych mu velice poděkovat za hodiny a dny
      strávené nad tímto příběhem s námi.
      <img className="partneri-fotka" src={partneri} alt="partneri-fotka" />
    </div>
  );
};
