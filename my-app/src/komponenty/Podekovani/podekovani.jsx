import React from 'react';
import './partneri.css';
import partneri from './../../img/partneri.jpg';

export const Podekovani = () => {
  return (
    <div className="partneri">
      <h1>TŘI KRÁLOVÉ, HRDINOVÉ OBDOJE</h1>
      <h2>Poděkování</h2>
      <p>
        V této sekci bychom chtěly velice poděkovat za spolupráci a podporu
        lidem, bez kterých by hra, Tři králové, nikdy nevznikla. V prvé řadě
        děkujeme spisovateli a šéfredaktorovi časopisu ABC Zdeňku Ležákovi. Hra
        je inspirovaná jeho knižní předlohou, propůjčenými grafickými podklady a
        společnými konzultacemi. Dále děkujeme mentorské dvojici, Blanka
        Semanová a Jakub Fišer, kteří prokázali velkou znalost programovacích
        jazyků a současně chuť nám tyto své znalosti předat. Zároveň náš dík
        putuje všem lektorům Digitální akademie Czechitas, jmenovitě však Filip
        Jirsák, Filip Chalupa, Martin Podloucký a Natálie Rydzá, kteří nám
        pomohli v prvníh krůčcích na naší cestě stát se kodérkami. Díky patří i
        Petru Šmelhausovi, jakožto klíčové osobě při obsahových konzultacích a
        tvorbě herního příběhu.
      </p>
      <img className="partneri-fotka" src={partneri} alt="partneri-fotka" />
    </div>
  );
};
