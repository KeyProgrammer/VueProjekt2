<template>
  <menu-component />
  <main class="content">
    <h1>JESZCZE NIE ZAIMPLEMENTOWANE !!!</h1>
    <p>Zakładka o Kontakt</p>
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
