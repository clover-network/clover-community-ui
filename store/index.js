export const state = () => ({
  locales: ["zh", "en"],
  locale: "en",
  type: "",
  id: null,
})
export const mutations = {
  SET_LANG(state, locale) {
    state.locale = locale
  },
  SET_TYPE(state, type) {
    state.type = type
  },
  SET_ID(state, id) {
    state.id = id
  },
}
