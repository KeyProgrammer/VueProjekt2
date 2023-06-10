import { createI18n } from "vue-i18n"
import numberFormats from "./rules/numbers.js"
import en from "./locales/en.json"
import pl from "./locales/pl.json"

const I18n = createI18n({
    locale: import.meta.env.VITE_DEFAULT_LOCALE, // Primary Language
    fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE,
    legacy: false, // wyłączenie dziedziczenia, musimy to dodać według dokumentacji
    globalInjection: true, // automatycznie w każdym widoku się pojawi pliku .vue funkcje: $t $n itp.
    warnHtmlMessage: false, // troche game changer o warningi XD
    messages: {en,pl},
    numberFormats
})


export default I18n;