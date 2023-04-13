<template>
  <menu-component />
  <main class="content">
    <div class="select">
   <select name="format" id="format">
      <option value="">Wdrożenia IT</option>
      <option value="">Konsultacje technologiczne</option>
      <option value="">Analityka webowa</option>
   </select>
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

<style lang="css" scoped>
select {
   -webkit-appearance:none;
   -moz-appearance:none;
   -ms-appearance:none;
   appearance:none;
   outline:0;
   box-shadow:none;
   border:2px solid black;
   background: white;
   background-image: none;
   flex: 1;
   padding: 1em 16em 1em 1.5em;
   color:black;
   cursor:pointer;
   font-size: 22px;
   font-family: 'Open Sans', sans-serif;
}
select::-ms-expand {
   display: none;
}
.select {
  display: block;
  margin:20px auto;
   position: relative;
   display: flex;
   width: 700px;
   height: 80px;
   line-height: 5;
   background: #5c6664;
}
.select::after {
   content: '\25BC';
   position: absolute;
   top: 0;
   right: 0;
   padding: 0 1em;
   background: #000000;
   cursor:pointer;
   pointer-events:none;
   transition:.25s all ease;
   color: rgb(131, 124, 124);
}
.select:hover::after {
   color: #fdfdfd;
}


</style>
