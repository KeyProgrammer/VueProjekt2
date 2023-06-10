<template>
  <header class="header">
    <router-link :to="Tr.i18nRoute({ name: 'RootSide' })">
      <div class="menu-logo"></div>
    </router-link>
    <nav class="menu">
      <div class="menu-options">
        <ul>
          <li>
            <p class="menu-underline-animation">
              <router-link :to="Tr.i18nRoute({ name: 'Offert' })" class="menu-option">{{ $t('menu&footer.linkOption1') }}</router-link>
            </p>
          </li>
          <li>
            <p class="menu-underline-animation">
              <router-link :to="Tr.i18nRoute({ name: 'Technology' })" class="menu-option">{{ $t('menu&footer.linkOption2') }}</router-link>
            </p>
          </li>
          <li>
            <p class="menu-underline-animation">
              <router-link :to="Tr.i18nRoute({ name: 'About' })" class="menu-option">{{ $t('menu&footer.linkOption3') }}</router-link>
            </p>
          </li>
          <li>
            <p class="menu-underline-animation">
              <router-link :to="Tr.i18nRoute({ name: 'Project' })" class="menu-option">{{ $t('menu&footer.linkOption4') }}</router-link>
            </p>
          </li>
          <li>
            <p class="menu-underline-animation">
              <router-link :to="Tr.i18nRoute({ name: 'Contact' })" class="menu-option">{{ $t('menu&footer.linkOption5') }}</router-link>
            </p>
          </li>
        </ul>
      </div>
   
    </nav>
    <div class="languageSwitcher"><LanguageSwitcher/></div>
  </header>
</template>

<script>
import Tr from "../i18n/translation"
import LanguageSwitcher from "./LanguageSwitcher.vue";

export default {
    setup() {
        return { Tr }; 
    },
    components: { 
      LanguageSwitcher 
    }
}
</script>

<style scoped>
@import '../css/MenuComponentStyle.css';
</style>
