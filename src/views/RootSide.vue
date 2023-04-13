<!-- eslint-disable max-len -->
<template>
  <MenuComponent />
  <main class="content" style="padding-bottom: 150px;">
    <!-- Animate-kewords-container -->
    <div class="root-animate-keywords-container">
      <div class="root-animate-keywords-container-words">
        <span class="root-animate-keywords-container-words-animation"></span>
      </div>
      <div class="root-animate-keywords-container-content">
        Nasza metodologia pracy opiera się na dwóch kluczowych krokach,które stanowią fundament naszego podejścia. <br>
        Dzięki ich stosowaniu, jesteśmy w stanie zapewnić naszym Klientom nie tylko efektywność, ale
        również staranne i przemyślane rozwiązania. <br>
        Nasze podejście stanowi w pełni dopasowaną do potrzeb biznesowych Klientów odpowiedź, pozwalającą na osiągnięcie
        wyznaczonych celów i wzrostu ich przedsiębiorstw. <br>
      </div>
    </div>
    <!-- Animate-kewords-container end -->
    <!-- Information container -->
    <div class="information-container">
      <div class="information-container-left">
        <img src="../images/PhotoRootSideOne.jpg" alt="photo">
      </div>
      <div class="information-container-right">
        <h1>Doświadczenie i profesjonalizm</h1> <br>
        <p>
          Możesz na nas liczyć w zakresie organizacji<br>
          procesów biznesowych w firmie, doborze <br>
          technologii,organizacji projektów i procesów IT. <br>
          Dzięki naszemu doświadczeniu możemy zrobić <br>
          dla Ciebie rzeczy,które wydają się niemożliwe. <br>
          Wyzwania zawsze szczególnie motywują nas do pracy.
        </p>
        <div>
          <button @click="$router.push('/offert')" class="information-container-right-button">Sprawdź Naszą Ofertę</button>
        </div>
      </div>
    </div>
    <!-- Information container end -->
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
};
</script>

<style></style>
