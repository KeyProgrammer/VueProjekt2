<!-- eslint-disable max-len -->
<template>
  <menu-component></menu-component>
    <router-view/>
  <footer-component></footer-component>
</template>


<script>
import FooterComponent from './components/FooterComponent.vue';
import MenuComponent from './components/MenuComponent.vue';
import LanguageSwitcher from './components/LanguageSwitcher.vue';

export default {
  components: {
    MenuComponent,
    FooterComponent,
    LanguageSwitcher
  }
}

</script>

<!-- <script>
import MenuComponent from '../src/components/';
import FooterComponent from '../components/FooterComponent.vue';

export default {
  name: 'App',
  components: {
    MenuComponent,
    FooterComponent,
  },
};
</script> -->

