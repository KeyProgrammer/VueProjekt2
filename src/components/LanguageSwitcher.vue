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
.dropdown {
  width: 40px;
  height: 40px;
  margin: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 100;
}

.projects {
  position: relative;
}

.projects ul {
  margin-top: 10px;
  position: absolute;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  background: white;
  left: 0px;
  list-style: none;
  border-radius: 5px;
  opacity: 0;
  transform: translateY(-10px);
  transition: opacity 0.4s ease, transform 0.4s ease;
  border: 1px solid black;
  cursor: pointer;
  z-index: 100;
  padding: 10px;
}

.projects.active ul {
  opacity: 1;
  transform: translateY(0);
}

.projects li {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.25s;
}

.projects li:hover {
  background-color: rgb(197, 173, 181);
}

.projects a {
  color: black;
  text-decoration: none;
}

.dropdown button {
  background: none;
  text-decoration: none;
  border: none;
  color: rgb(89, 9, 9);
  font-size: 18px;
  cursor: pointer;
}

.dropdown button:focus {
  width: 40px;
  height: 40px;
  padding: 0;
  border-radius: 50%;
  transition: 0.1s;
  box-shadow: inset 20px 20px 20px 20px #12064b;
}

.projects>button>img {
  width: 40px;
}

.dropdown.active button:focus+ul {
  opacity: 1;
  pointer-events: all;
  transform: translateY(0px);
}

</style>