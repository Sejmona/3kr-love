import React from 'react';
import './pribeh.css';
import balaban from './../../img/balaban.jpg';
import masin from './../../img/masin.jpg';
import moravek from './../../img/moravek.jpg';

export const Pribeh = () => {
  return (
    <div className="pribeh">
      <h1>TŘI KRÁLOVÉ, HRDINOVÉ OBDOJE</h1>

      <img className="balaban" src={balaban} alt="balaban" />
      <p>Josef Balabán – 1894-1941</p>
      <p>
        Byl československý legionář v Rusku, zpátky do Československa se vrátil
        s hodností podporučíka a s touto hodností vstupuje do armády. V roce
        1936 byl povýšen do hodnosti podplukovníka a jmenován přednostou osobní
        skupiny na Ministerstvu národní obrany. Po okupaci Čech a Moravy
        nacistickým Německem se zapojil do odbojové organizace Obrana národa a
        stal se členem jejího užšího vedení. Organizoval zpravodajskou síť a
        zformoval zpravodajsko-sabotážní skupinu nazývanou Tři králové. Společně
        s podplukovníkem Josefem Mašínem a štábním kapitánem Václavem Morávkem
        provedli řadu sabotážních a diverzních akcí a udržovali kontakty s
        československou exilovou reprezentací. Vrcholem jejich činnosti byly
        bombové atentáty v Berlíně na německé ministerstvo letectví a policejní
        ředitelství. Neúspěšně se také pokoušeli o atentát na Heinricha
        Himmlera. Dne 22. dubna 1941 byl Josef Balabán zatčen gestapem. Po
        čtyřech a pul měsíčním mučení, kdy nikoho neprozradil, byl 3. října 1941
        popraven v Praze-Ruzyni. V květnu 2005 byl Josef Balabán povýšen in
        memoriam do hodnosti generálmajora.
      </p>
      <img className="masin" src={masin} alt="masin" />
      <p>Josef Mašín 1896 - 1942</p>
      <p>
        První světovou válku prožil, na ruské frontě. Rakouskouherskou uniformu
        oblékal ale krátce, v roce 1915 přeběhl a byl přijat do československých
        legií. Během bojů byl několikrát raněn a vyznamenán. Když se vrátil z
        války, nastoupil do armády. Mnichovská dohoda pro něj byla osobní ranou,
        po které se rozhodl přejít do ilegality a bojovat na vlastní pěst. Pro
        potřeby odboje zajistil v ruzyňských kasárnách část zbraní a s dalšími
        odpůrci nacistů prováděl sabotáže. Tři králové spolupracovali s různými
        ilegálními organizacemi a shromažďoval informace o dění v protektorátu,
        které předával exilové vládě do Londýna. Zprávy od předsedy vlády Aloise
        Eliáše, obyčejných lidí i českých gestapáků byly pro zahraniční odboj
        nenahraditelné. Byli to hoši, kteří stihli ještě tropit škodolibé žerty
        z komisaře gestapa Oskara Fleischera, který byl pověřen jejich
        dopadením. Nebylo proto divu, že na odvážné odbojáře začal v
        protektorátu nelítostný hon. V březnu 1941 ještě navázali spojení s
        Londýnem prostřednictvím vlastní vysílačky Sparta II, pak se ale nad
        nimi začala stahovat mračna - 22. dubna byl dopaden Balabán a 13. května
        padl do rukou gestapa Mašín. Svým udatným odporem v domě v ulici Pod
        Terebkou (dnešní Čiklova 19) v Praze-Nuslích umožnil únik Morávkovi a
        radiotelegrafistovi Františku Peltánovi, kteří odtud vysílali.
      </p>
      <img className="moravek" src={moravek} alt="moravek" />

      <p>Václav Morávek 1904-1942</p>
      <p>
        Nejmladší z trojice Tří králů. Nastoupil do armády v roce1923 a po
        okupaci byl v hodnosti štábního kapitána. Byl armádním přeborníkem ve
        střelbě z pistole a trefoval se i od boku: dokázal z kapsy zasáhnout
        hlavu stojící figuríny. Na útěku před gestapem usínal vždy se dvěma
        pistolemi pod polštářem. A na jeho nočním stolku nikdy nechyběla Bible
        kralická, v níž si pravidelně čítal. K víře ho přivedla maminka
        Jaroslava, kterou velmi miloval. I proto často říkával „Věřím v Boha a
        ve své pistole! „ Pokusil se odejít do zahraničí, ale to se mu nepovedlo
        a tak v roce 1940 s stává klíčovou postavou NO, protože byl vybrán jako
        klíčová spojka s agentem Paulem Neumanem. Proto většina zásadních
        informací pro naše zpravodaje v Londýně procházela právě přes Morávka.
        Po zatčení Balabána a Mašína operoval 10 měsíců sám. Na začátku roku
        1942 byl ve spojení s výsadkáři operace Silver A a Anthropoind. Byl
        dopaden na Prašném mostě, kde byl v boji zastřelen. Oficiální verze
        gestapa ovšem říká, že spáchal sebevraždu.
      </p>
    </div>
  );
};
