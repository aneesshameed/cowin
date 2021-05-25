import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  createPersistedState({
    key: 'CoWin_By_Elifent',
    paths: ['userSettings', 'recentSearches', 'pinnedCenters', 'centers'],
  })(store)
}
