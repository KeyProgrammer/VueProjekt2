<template>
  <div class="dropdown">
    <div class="projects" :class="{ active: isDropdownActive }">
      <button @click="toggleDropdown">
        <img src="../images/globe_white.png" alt="globe">
      </button>
      <ul>
        <li v-for="sLocale in supportedLocales" :key="sLocale" @click.prevent="() => handleSwitchLanguage(sLocale, toggleDropdown)">
          <a>{{ sLocale.toUpperCase() }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n'
import Tr from "@/i18n/translation"
import { useRouter } from "vue-router"

export default {
  data() {
    return {
      isDropdownActive: false
    }
  },
  setup() {
    const { t, locale } = useI18n()
    const supportedLocales = Tr.supportedLocales

    const router = useRouter()

    const switchLanguage = async (newLocale) => {
      await Tr.switchLanguage(newLocale)

      // Aktualizuj adres URL po zmianie języka
      try {
        await router.replace({ params: { locale: newLocale } })
      } catch (e) {
        console.error(e)
        router.push("/")
      }
    }

    const handleSwitchLanguage = async (newLocale, toggleDropdown) => {
      await switchLanguage(newLocale)
      toggleDropdown()
    }

    return { t, locale, supportedLocales, handleSwitchLanguage }
  },
  methods: {
    toggleDropdown() {
      this.isDropdownActive = !this.isDropdownActive
    }
  }
}
</script>




<style scoped>
@import "../css/LanguageSwitcherStyle.css"
</style>