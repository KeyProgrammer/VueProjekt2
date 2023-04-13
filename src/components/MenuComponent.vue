<!-- eslint-disable max-len -->
<template>
  <header class="header">
    <router-link to="/">
      <div class="menu-logo"></div>
    </router-link>
    <nav class="menu">
      <div class="menu-options">
        <ul>
          <li>
            <p class="menu-underline-animation"><router-link to="/offert" class="menu-option">Oferta</router-link></p>
          </li>
          <li>
            <p class="menu-underline-animation"><router-link to="/technology"
                class="menu-option">Technologie</router-link></p>
          </li>
          <li>
            <p class="menu-underline-animation"><router-link to="/about" class="menu-option">O Nas</router-link></p>
          </li>
          <li>
            <p class="menu-underline-animation"><router-link to="/career" class="menu-option">Kariera</router-link></p>
          </li>
          <li>
            <p class="menu-underline-animation"><router-link to="/contact" class="menu-option">Kontakt</router-link></p>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<!-- <div id="hamburger">
  <i class="fa fa-bars" v-on:click="showMenu()"></i>
</div> -->

<script>
export default {
  methods: {
    showMenu: function() {
      let nav = document.querySelector(".menu-options");
      nav.classList.toggle("active");
      let header = document.querySelector(".header");
      header.classList.toggle("active");
   }
  }
}
</script>
