import React from 'react';
import './pravidla.css';

export const Pravidla = () => {
  return (
    <header className="hlava">
      <h3>TŘI KRÁLOVÉ, HRDINOVÉ OBDOJE</h3>
      <h4>Pravidla hry</h4>
      <div className="pravidla">
        <p2>
          Herním polem je město Praha. Časové období, ve kterém se díky hře
          budeš pohybovat, jsou roky 1939 – 1942. Vybraly jsme pro Tebe celkem
          10 míst. Lokace nejsou vybrány náhodně, je za nimi příběh, proto Ti
          doporučujeme držet se bodů tak, jak jsme je sestavily. Na všech
          lokacích se dozvíš, jaká historická událost je s nimi spjata. Mapa,
          kterou pro pohyb po městě používáš, Ti zpřístupní herní otázku, na
          kterou musíš odpovědět, aby si zjistil, kam jít dál. To ale není
          všechno. Každé místo si dobře prohlédni, protože ono samotné je
          zdrojem indicií k vyluštění tajenky. Tajenka se skládá z 10 písmen. Na
          každé lokaci zjistíš jedno písmeno tak, aby si na poslední lokaci mohl
          vyluštit tajenku a vyhrát hru. Záměrně jsme vybraly běžná místa,
          taková, která by tě na první pohled možná asi nezaujala. Věř, že to
          právě byl náš cíl. Chtěly jsme, aby ses začal na město dívat trochu
          jinak. Aby se ti rozšířily obzory a uvědomil sis, jak velké příběhy se
          mohou skrývat za místy a uličkami, do kterých by si to nikdy neřekl.
        </p2>
      </div>
      <div className="kontaktni-fotka">
        <img src="pravidla.jpg" alt="kontaktní fotka" />
      </div>
    </header>
  );
};
