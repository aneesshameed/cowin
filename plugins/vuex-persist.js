import VuexPersistence from 'vuex-persist'

export default ({ store }) => {
  new VuexPersistence({
    filter: (mutation) =>
      mutation.type == 'userSettings' || mutation.type == 'recentSearches',
  }).plugin(store)
}
