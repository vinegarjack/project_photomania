export const state = () => ({
  locales: ['en', 'ru'],
  locale: 'en'
})

export const getters = {
  locale (state) {
    return state.locale
  },
  locales (state) {
    return state.locales
  }
}

export const mutations = {
  setLang (state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  }
}
