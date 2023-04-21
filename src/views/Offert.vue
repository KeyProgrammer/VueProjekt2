<template>
   <menu-component />
   <main class="content">
      <div class="container">
         <div class="select">
            <select name="format" id="format" @change="changeDisplayDiv('optionMenu')">
               <option class="implementation">Wdrożenia IT</option>
               <option class="consultation">Konsutlacje Technolgiczne</option>
               <option class="analytics">Analityka Webowa</option>
               <option class="uxDesign">Projektowanie UI/UX</option>
            </select>
         </div>
         <div class="menu-mini-container">
            <ul class="mini_menu">
               <li class="implementation" tabindex="1" @click="changeDisplayDiv('listMenu', 'implementation')">
                  <a>Wdrożenia IT</a>
               </li>
               <li class="consultation" tabindex="1" @click="changeDisplayDiv('listMenu', 'consultation')">
                  <a>Konsutlacje Technolgiczne</a>
               </li>
               <li class="analytics" tabindex="1" @click="changeDisplayDiv('listMenu', 'analytics')">
                  <a>Analityka Webowa</a>
               </li>
               <li class="uxDesign" tabindex="1" @click="changeDisplayDiv('listMenu', 'uxDesign')">
                  <a>Projektowanie UI/UX</a>
               </li>
            </ul>
         </div>
         <div class="container-content">
            <div class="div-implementation">
               <h1>Konsulting</h1>
               <p>Dostarczamy odpowiedzi na krytyczne pytania ze styku biznesu oraz IT. Doradzimy, jaką technologię wybrać
                  do
                  realizacji określonych celów. Sprawdzimy, co ryzykujesz i jak to zminimalizować. Z nami możesz
                  skonsultować
                  swoje plany rynkowe i dowiedzieć się, jak najlepiej je zrealizować. Wyrastamy z branży technologicznej, a
                  doradztwo biznesowe jest naszą wyjątkowo mocną stroną. Współpraca odbywa się w modelu zwinnym, przy
                  pełnym
                  zaangażowaniu ekspertów dziedzinowych. Nasi konsultanci i analitycy pomagają dostarczyć świeżego
                  spojrzenia w
                  oparciu o solidne doświadczenie: uczestniczyli w projektach transformacji jednostek IT i e-commerce.
                  Brali też
                  udział we wdrażaniu procesów zarządzania architekturą korporacyjną oraz architekturą rozwiązań.
               </p>

               <h1>Rozwiązania portalowe</h1>
               <p>Pomożemy rozwinąć twój e-biznes. Doradzimy, jak aktywnie komunikować się z klientem. W zależności od
                  rodzaju i
                  celu działalności, pomożemy Ci stworzyć własny portal: e-commerce, informacyjny, intranetowy, obsługowy
                  lub
                  samoobsługowy. Współpracujemy na każdym etapie: specyfikacji wymagań, projektowania nawigacji i
                  architektury
                  informacji. Doradzamy przy wyborze platformy. Wdrażamy projekty oparte o rozwiązania OpenSource (Liferay
                  Portal) oraz silniki komercyjne (Oracle ATG, Hybris). Oferujemy usługi z zakresu User Experience –
                  badania,
                  audyty, projektowanie. Korzystamy z narzędzi Google Analytics, Comscore, Gemius, IBM Tealeaf oraz
                  własnych
                  zaawansowanych rozwiązań. Nasi analitycy są do ciągłej dyspozycji zespołów Klienta w zakresie rozwijania
                  procesów i publikowania treści.</p>
               <h1>Rozwiązania mobilne</h1>
               <p>Z doświadczenia wiemy, jak istotne w sprzedaży i komunikacji są rozwiązania mobilne. Dzięki naszym
                  rozwiązaniom
                  mobilnym i aplikacjom będziesz zawsze blisko swojego klienta. Podpowiemy, jak mobilnie zarządzisz pracą
                  swoich
                  pracowników lub lepiej rozdzielisz ich zadania. Projektujemy i dostarczamy rozwiązania, które klienci
                  mają
                  zawsze przy sobie – w swoich smartfonach. Operujemy zarówno na platformie iOS, jak i Android.
                  Zoptymalizowana
                  interakcja z użytkownikiem jest dla nas kluczowym parametrem.</p>
            </div>
            <div class="div-consultation">

               <h1>Konsulting</h1>
               <p>Dostarczamy odpowiedzi na krytyczne pytania ze styku biznesu oraz IT. Doradzimy, jaką technologię wybrać
                  do
                  realizacji określonych celów. Sprawdzimy, co ryzykujesz i jak to zminimalizować. Z nami możesz
                  skonsultować
                  swoje plany rynkowe i dowiedzieć się, jak najlepiej je zrealizować. Wyrastamy z branży technologicznej, a
                  doradztwo biznesowe jest naszą wyjątkowo mocną stroną. Współpraca odbywa się w modelu zwinnym, przy
                  pełnym
                  zaangażowaniu ekspertów dziedzinowych. Nasi konsultanci i analitycy pomagają dostarczyć świeżego
                  spojrzenia
                  w oparciu o solidne doświadczenie: uczestniczyli w projektach transformacji jednostek IT i e-commerce.
                  Brali
                  też udział we wdrażaniu procesów zarządzania architekturą korporacyjną oraz architekturą rozwiązań.
               </p>
            </div>
            <div class="div-analytics">
               <h1>Optymalizacja konwersji</h1>
               <p>Konwersja sprzedaży ma olbrzymie znaczenie! Sprowadzenie ruchu do platformy eCommerce bez właściwych
                  procesów obsługi psuje wizerunek firmy i przede wszystkim, nie generuje sprzedaży. Podnosimy konwersję
                  poprzez działania polegające na:
                  Analizie zachowań użytkowników w oparciu o narzędzia analityczne (m.in. Abee Cloud, IBM Tealeaf, inne)
                  Testy AB oparte na platformie Abee Cloud
                  Audyty stron i doradztwo ekspertów z wieloletnim doświadczeniem w eCommerce.
                  Kluczowym elementem są dane. Potrafimy je zbierać i analizować z użyciem Abee Cloud, zasilając w ten
                  sposób nasze modele, lub w przypadku wielu Klientów, gdzie dane maja wysoką wrażliwość, zasilając systemy
                  BI po stronie Klienta. Efektem analizy są rekomendacje poparte danymi empirycznymi, które wdrażamy
                  natychmiastowo w życie.
               </p>
               <h1>Abee TST</h1>
               <p>Testy A/B<br>

                  Nasza firma oferuje narzędzie Abee TST, które pozwala na przeprowadzanie zaawansowanych testów A/B dla
                  Twojego serwisu internetowego. Dzięki niemu masz możliwość kompleksowego testowania różnych wariantów
                  Twojego serwisu - od prezentacji produktów aż po stronę podziękowania za zamówienie. Rozwiązanie to
                  działa w chmurze, co umożliwia łatwą edycję treści na stronach oraz dostarcza pewne dane dotyczące
                  konwersji i skuteczności danego scenariusza testowego.<br><br>

                  Abee TST zapewnia łatwość konfiguracji testów, a także możliwość ponownego wykorzystania już
                  skonfigurowanego testu dzięki separacji względem CMS. Narzędzie oferuje nieograniczone możliwości edycji
                  pozmienianych treści, a także umożliwia zamianę zarówno pojedynczych elementów serwisu, jak i całych
                  stron. Obsługuje również dynamiczne elementy strony i umożliwia monitorowanie wyników w czasie<br><br>
                  rzeczywistym.

                  Abee TST jest łatwe do wdrożenia i intuicyjne w obsłudze, co pozwala na uniknięcie konieczności
                  angażowania zespołu IT. Wystarczy wpięcie w stronę dostarczonego przez nas skryptu js. Proponujemy
                  elastyczny model rozliczeń oparty na opłatach abonamentowych i zapewniamy pełne wsparcie biznesowe, w tym
                  rekomendacje testów, konfigurację wdrożeń, raportowanie i analizę wyników oraz przygotowywanie propozycji
                  zmian na stronie internetowej na podstawie przeprowadzonych testów.<br><br>
               </p>
            </div>
            <div class="div-uxDesign">
               <h1>Projektowanie UI/UX</h1>
               <p>Zadbamy o pozytywne doświadczenie klientów korzystających z Twojego serwisu. Strona internetowa musi być
                  funkcjonalna, ale i dająca przyjemność, by użytkownik chciał do niej wracać. Nasze działania z zakresu UX
                  opieramy na pięciu krokach:<br><br>
                  1) Badania z użytkownikami - każdy projekt rozpoczynamy od określenia potrzeb konsumentów; możemy
                  przeprowadzić dla Ciebie badania focusowe, sesje wywiadów pogłębionych, badania z użyciem
                  eyetrackera;<br>
                  2) Analiza webowa z wykorzystaniem profesjonalnych narzędzi, np. IBM Tealeaf;<br>
                  3) Audyty eksperckie - zidentyfikujemy te obszary, które mogą negatywnie wpływać na funkcjonalność i
                  konwersję;<br>
                  4) Projektowanie - dzięki zebraniu twardych danych o zachowaniach użytkowników nasze rozwiązania webowe i
                  mobilne są realnie dopasowane do ich oczekiwań;<br>
                  5) Testy użyteczności - sprawdzamy koncepcje i założeń projektowe przed wdrażaniem za pomocą testów z
                  użytkownikami i testów A/B na naszej platformie Abee TST.<br>
               </p>
            </div>
         </div>
      </div>
   </main>
   <footer-component />
</template>

<script>

import MenuComponent from '../components/MenuComponent.vue';
import FooterComponent from '../components/FooterComponent.vue';
import '../css/menuStyle.css';
import '../css/rootAnimateKeywordsContainer.css';
import '../css/informationContainerStyle.css';

export default {
   // eslint-disable-next-line vue/multi-word-component-names
   name: 'About',
   components: {
      MenuComponent,
      FooterComponent,
   },
   data() {
      return {
         currentOptionId: '.div-implementation',
         selectorId: '',
      }
   },
   methods: {
      changeDisplayDiv: function (typeOfMenu, className = "nothing") {
         if (typeOfMenu === 'optionMenu' && className === "nothing") {
            const option = document.querySelector("#format");
            this.selectorId = ".div-" + option[option.selectedIndex].className;
            this.replaceDivs(this.currentOptionId.toString(), this.selectorId.toString());
            this.currentOptionId = this.selectorId;
         } else {
            this.selectorId = ".div-" + className;
            this.replaceDivs(this.currentOptionId.toString(), this.selectorId.toString());
            this.currentOptionId = this.selectorId;
         }
      },
      replaceDivs: function (oldDivName, newDivName) {
         document.querySelector(oldDivName).style.display = "none";
         document.querySelector(newDivName).style.display = "block";
      }
   },
};
</script>

<style lang="css" scoped>
.div-implementation {
   display: block;
}

.div-consultation {
   display: none;
}

.div-analytics {
   display: none;
}

.div-uxDesign {
   display: none;
}

.content {
   margin-bottom: 150px;
   height: auto;
}

.container {
   display: flex;
   width: 90%;
   margin: 20px auto;
   /* flex-direction: column;  */
   /* <=== w przypadku selecta */
}

.mini_menu li {
   padding-bottom: 10px;
   text-transform: uppercase;

}

ul {
   position: sticky;
   top: 20px
}

h1:first-child {
   padding-top: 0;
   margin-top: 0;
}

h1 {
   padding-top: 15px;
}

.mini_menu li:hover {
   cursor: pointer;
   color: #2c4a8f;
}

.mini_menu li:focus {
   color: #2c15ff;
}

.select {
   display: none;
}


/*Lewy div*/
.menu-mini-container {
   float: left;
   width: 25%;
   padding-right: 10px;
   font-size: 20px;

}

li a:focus {
   background: yellow;
}


/*Prawy div*/
.container-content {
   width: 75%;
   float: left;
   text-align: justify;
}

.container-content [class*="div"] {
   animation-name: loading;
   animation-iteration-count: 1;
   animation-duration: .7s;
}

@keyframes loading {

   0% {
      opacity: 0;
   }

   25% {
      opacity: 0.25;
   }

   50% {
      opacity: 0.5;
   }

   75% {
      opacity: 0.75;
   }

   100% {
      opacity: 1;
   }
}

@media only screen and (max-width:1120px) {
   .menu-mini-container {
      display: none;
      width: 100%;
   }

   .container-content {
      width: 100%;
   }

   .container {
      flex-direction: column;
   }


   select {
      -webkit-appearance: none;
      -moz-appearance: none;
      -ms-appearance: none;
      appearance: none;
      outline: 0;
      box-shadow: none;
      border: 2px solid black;
      background: #ffffff;
      background-image: none;
      flex: 1;
      padding: 0 .5em;
      color: #000000;
      cursor: pointer;
      font-size: 1em;
      font-family: 'Open Sans', sans-serif;
   }

   select::-ms-expand {
      display: none;
   }

   .select {
      position: relative;
      display: flex;
      width: 90%;
      height: 3em;
      line-height: 3;
      background: #5c6664;
      overflow: hidden;
      border-radius: .25em;
      margin: 0 auto;
      margin-bottom: 30px;
      color: white;
   }

   .select::after {
      content: '\25BC';
      position: absolute;
      top: 0;
      right: 0;
      padding: 0 1em;
      background: #132e6c;
      cursor: pointer;
      pointer-events: none;
      transition: .25s all ease;
   }

   .select:hover::after {
      color: #06cc00;
   }

}</style>
