<template>
  <menu-component/>
    <main class="content" style="margin: 20px;">
        <section class="Programmer-section">
            <p> Kontakt </p>
        </section>
    </main>
</template>

<script>

import MenuComponent from '../components/MenuComponent.vue';
import '../css/menuStyle.css';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Contact',
  components: {
    MenuComponent,
  },
};
</script>
