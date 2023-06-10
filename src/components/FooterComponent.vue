<!-- eslint-disable max-len -->
<template>
  <footer class="footer">
    <div class="footer-top-menu">
      <div class="footer-options">
        <ul>
          <li>
            <p><router-link :to="Tr.i18nRoute({ name: 'Offert' })" class="footer-option">{{ $t('menu&footer.linkOption1')
            }}</router-link></p>
          </li>
          <li>
            <p><router-link :to="Tr.i18nRoute({ name: 'Technology' })" class="footer-option">{{
              $t('menu&footer.linkOption2') }}</router-link>
            </p>
          </li>
          <li>
            <p><router-link :to="Tr.i18nRoute({ name: 'About' })" class="footer-option">{{ $t('menu&footer.linkOption3')
            }}</router-link></p>
          </li>
          <li>
            <p><router-link :to="Tr.i18nRoute({ name: 'Project' })" class="footer-option">{{ $t('menu&footer.linkOption4')
            }}</router-link></p>
          </li>
          <li>
            <p><router-link :to="Tr.i18nRoute({ name: 'Contact' })" class="footer-option">{{ $t('menu&footer.linkOption5')
            }}</router-link></p>
          </li>
        </ul>
      </div>
      <div class="footer-top">
        <button @click="topFunction"></button>
      </div>

      <div class="footer-bottom">
        <p>Copyright 2023 KeyPrograms One Sp. z o.o. (Ostrowski Patryk)</p>
      </div>
    </div>
  </footer>
</template>

<script>
import Tr from "@/i18n/translation"

export default {
  setup() {
    return { Tr }
  },
  methods: {
    topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
  },
};
</script>

<style scoped>
@import "../css/FooterComponentStyle.css";
</style>

