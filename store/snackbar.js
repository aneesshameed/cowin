export const state = () => ({
  snack: null
})

export const mutations = {
  add(state, text) {
    state.snack = text
  }
}
