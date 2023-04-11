<template>
  <menu-component/>
    <main class="content">
        <section class="Programmer-section" style="margin: 20px;">
            <p> Oferta </p>
        </section>
    </main>
</template>

<script>

import MenuComponent from '../components/MenuComponent.vue';
import '../css/menuStyle.css';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Offert',
  components: {
    MenuComponent,
  },
};
</script>
