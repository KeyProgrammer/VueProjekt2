<template>
  <menu-component/>
    <main class="content">
        <section class="Programmer-section" style="margin: 20px;">
            <p> Karierdd</p>
        </section>
    </main>
  <footer-component/>
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
