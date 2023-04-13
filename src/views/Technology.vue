<template>
  <menu-component />
  <main class="content" style="padding-bottom: 150px">
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
            <button @click="$router.push('/offert')" class="information-container-right-button">Sprawdź Naszą
              Ofertę</button>
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
};
</script>
