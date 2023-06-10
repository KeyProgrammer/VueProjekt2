<template>
  <main class="content">
    <!-- Animate-kewords-container -->
    <div class="root-animate-keywords-container">
      <div class="root-animate-keywords-container-words">
        <span class="root-animate-keywords-container-words-animation"></span>
      </div>
      <div class="root-animate-keywords-container-content" v-html="$t('RootSide.root-animate-keywords-container-content-text')">
      </div>
    </div>
    <!-- Animate-kewords-container end -->

    <!-- Information container -->
    <div class="information-container">
      <div class="information-container-left">
        <img src="../images/PhotoRootSideOne.jpg" alt="photo">
      </div>
      <div class="information-container-right">
        <h1 v-html="$t('RootSide.information-container-right-h1')"></h1> <br>
        <p v-html="$t('RootSide.information-container-right-text')"></p>
        <div>
          <button @click="$router.push(Tr.i18nRoute({ name: 'Offert' }))" class="information-container-right-button" v-html="$t('RootSide.information-container-right-button-text')"></button>
        </div>
      </div>
    </div>
    <!-- Information container end -->

  </main>
</template>

<script>
import Tr from "@/i18n/translation";

export default {
  name: "RootSide",
  setup() {
    return { Tr }
  }
};
</script>

<style scoped>
@import "../css/Root-AnimateKeywordsStyle.css";
@import "../css/Root-informationContainerStyle.css";
.content {
   position: relative;
   margin-bottom: 150px;
   height: auto;
} 
/* na to warto zwrócić uwagę przy budowie innych komponentów */
</style>
