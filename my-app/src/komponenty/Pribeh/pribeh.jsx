import React from 'react';
import './pribeh.css';
import balaban from './../../img/balaban.jpg';
import masin from './../../img/masin.jpg';
import moravek from './../../img/moravek.jpg';

export const Pribeh = () => {
  return (
    <body>
      <section className="pribeh">
        <h1>TŘI KRÁLOVÉ, HRDINOVÉ OBDOJE</h1>
        <img src="balaban.jpg" alt="balaban" />
        <img src="masin.jpg" alt="masin" />
        <img src="moravek.jpg" alt="moravek" />
        <div className="clanek">
          <p>
            Tři králové - členové českého protinacistického odboje Tento příběh
            se odehrává v letech 1939 – 1942 za okupace. Kdy stovky odvážných
            Čechoslováků tajně bojovali proti nenáviděnému fašizmu, který měl v
            plánu zlikvidovat mnoho ostatních národů. Pojďte s námi po stopách
            těch nejodvážnějších:
          </p>
        </div>
      </section>
    </body>
  );
};
