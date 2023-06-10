<template>
    <div class="dropdown">
        <div class="projects">
            <button><img src="../images/globe_white.png" alt="globe"></button>
            <ul>
                <li v-for="sLocale in supportedLocales" @click.prevent="switchLanguage({ sLocale })">
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
    setup() {
        const { t, locale } = useI18n()
        const supportedLocales = Tr.supportedLocales

        const router = useRouter()

        const switchLanguage = async (LanguageTag) => {
            const newLocale = LanguageTag.sLocale;
            await Tr.switchLanguage(newLocale) // poczytaj jak działa await

            // Update the URL adter the language is switched   
            try {
                await router.replace({ params: { locale: newLocale } }) // zamiana w index.js od routera lokalizacji 
            } catch (e) {
                console.error(e)
                router.push("/")
            }
        }
        return { t, locale, supportedLocales, switchLanguage }
    },
    methods: {
        exampleFun() {
            console.log("działa");
        }
    }
}
</script>

<style scoped>
@import "../css/LanguageSwitcherStyle.css";
</style>

<!-- 
        <select @change="switchLanguage">
        <option
            v-for="sLocale in supportedLocales" 
            :key="`locale-${sLocale}`"
            :value="sLocale"
            :selected="locale === sLocale"
        >
            {{ t(`locale.${sLocale}`) }}   wykonanie tłumaczenia// trza poczytać jak zadziała mi wszystko z filmiku 
        </option>
    </select>
-->