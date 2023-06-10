import i18n from "@/i18n"

const Trans = {
    get defaultLocale() {
        return import.meta.env.VITE_DEFAULT_LOCALE
      },

    get supportedLocales() {
        return import.meta.env.VITE_SUPPORTED_LOCALES.split(",") // utworzy tablice i wie, że splitem jest przecinek 
    },

    get currentLocale() {
      return i18n.global.locale.value
    },

    set currentLocale(newLocale) {
        i18n.global.locale.value = newLocale // odwołanie się do globalnego obiektu i18 i jego globalnych zmiennych jakim jest locale 
    },

    isLocaleSupported(locale) {
        return Trans.supportedLocales.includes(locale) // sprawdzenie czy wspieramy daną lokalizację 
    },

    getUserLocale() {
        const locale = window.navigator.language || 
            window.navigator.userLanguage || 
            Trans.deafulLocale

        return {
            locale: locale,
            localeNoRegion: locale.split('-')[0]
        }
    }, // dobra chyba czaje jak funkcja działa 

    getPersistedLocale() {
        const persistedLocale = localStorage.getItem("user-locale")
    
        if(Trans.isLocaleSupported(persistedLocale)) {
          return persistedLocale
        } else {
          return null
        }
    },

    guessDefaultLocale() {
        const userPersistedLocale = Trans.getPersistedLocale()
        if(userPersistedLocale) {
          return userPersistedLocale
        }
    
        const userPreferredLocale = Trans.getUserLocale()
    
        if (Trans.isLocaleSupported(userPreferredLocale.locale)) {
          return userPreferredLocale.locale
        }
    
        if (Trans.isLocaleSupported(userPreferredLocale.localeNoRegion)) {
          return userPreferredLocale.localeNoRegion
        }
        
        return Trans.defaultLocale
    },

    async switchLanguage(newLocale) {
        Trans.currentLocale = newLocale // dziwne użycie settera 
        document.querySelector("html").setAttribute("lang", newLocale)
        localStorage.setItem("user-locale", newLocale)
    },

    // 31 minuta ogarnać jak to działa mniej więcej 
    async routeMiddleware(to, _from, next) {
        const paramLocale = to.params.locale
    
        if(!Trans.isLocaleSupported(paramLocale)) {
          return next(Trans.guessDefaultLocale())
        }
    
        await Trans.switchLanguage(paramLocale)
    
        return next()
      },

    // ... (operator spreadu https://blixtdev.com/how-to-use-the-spread-operator-in-javascript/)
    i18nRoute(to) {
      return {
        ...to, // tutaj pobieramy cały link na którym pracujemy 
        params: { // tutaj zmieniamy parametry w taki sposób, że do listy parametrów dodajemy ten z obcenej lokalizacji, chyba jakoś tak 
          locale: Trans.currentLocale,
          ...to.params
        }
      }
    }
}

export default Trans
