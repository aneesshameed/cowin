import moment from 'moment'

export const state = () => ({
  loading: false,
  districts: [
    {
      district_id: 301,
      district_name: 'Alappuzha',
      lat: 9.5011196,
      long: 76.3070864,
    },
    {
      district_id: 307,
      district_name: 'Ernakulam',
      lat: 9.9710364,
      long: 76.2382533,
    },
    {
      district_id: 306,
      district_name: 'Idukki',
      lat: 9.8149141,
      long: 76.7405573,
    },
    {
      district_id: 297,
      district_name: 'Kannur',
      lat: 11.8666652,
      long: 75.3611081,
    },
    {
      district_id: 295,
      district_name: 'Kasaragod',
      lat: 12.5000629,
      long: 74.9664969,
    },
    {
      district_id: 298,
      district_name: 'Kollam',
      lat: 8.9041455,
      long: 76.5600539,
    },
    {
      district_id: 304,
      district_name: 'Kottayam',
      lat: 9.5946677,
      long: 76.5030831,
    },
    {
      district_id: 305,
      district_name: 'Kozhikode',
      lat: 11.2559949,
      long: 75.7407739,
    },
    {
      district_id: 302,
      district_name: 'Malappuram',
      lat: 11.0619033,
      long: 76.0508822,
    },
    {
      district_id: 308,
      district_name: 'Palakkad',
      lat: 10.7882494,
      long: 76.6188878,
    },
    {
      district_id: 300,
      district_name: 'Pathanamthitta',
      lat: 9.2603719,
      long: 76.7605519,
    },
    {
      district_id: 296,
      district_name: 'Thiruvananthapuram',
      lat: 8.4998965,
      long: 76.8541266,
    },
    {
      district_id: 303,
      district_name: 'Thrissur',
      lat: 10.5115487,
      long: 76.1532104,
    },
    {
      district_id: 299,
      district_name: 'Wayanad',
      lat: 11.7145627,
      long: 75.9690999,
    },
  ],
  centers: [],
  selectedCenter: null,
  userSettings: {
    district: null,
    paidSlots: true,
    dose1: true,
    dose2: true,
    eighteenAbove: true,
    fourtyFiveAbove: true,
  },
  recentSearches: [],
  pinnedCenters: [],
})

export const mutations = {
  loading(state, data) {
    state.loading = data
  },
  set_district(state, data) {
    state.userSettings.district = data
  },
  set_paid_slots(state, data) {
    state.userSettings.paidSlots = data
  },
  set_dose1(state, data) {
    state.userSettings.dose1 = data
  },
  set_dose2(state, data) {
    state.userSettings.dose2 = data
  },
  set_eighteen_above(state, data) {
    state.userSettings.eighteenAbove = data
  },
  set_fourty_five_above(state, data) {
    state.userSettings.fourtyFiveAbove = data
  },
  set_centers(state, data) {
    state.centers = data
  },
  set_selected_center(state, data) {
    state.selectedCenter = data
  },
  update_recent_search(state, data) {
    for (let i = state.recentSearches.length - 1; i >= 0; i--) {
      if (state.recentSearches[i].centers.center_id == data.centers.center_id) {
        state.recentSearches.splice(i, 1)
      }
    }
    state.recentSearches.unshift(data)
    if (state.recentSearches.length > 5) state.recentSearches = state.recentSearches.slice(0, 5)
  },
  update_pinned_centers(state, data) {
    for (let i = state.pinnedCenters.length - 1; i >= 0; i--) {
      if (state.pinnedCenters[i].centers.center_id == data.centers.center_id) {
        state.pinnedCenters.splice(i, 1)
        return
      }
    }
    state.pinnedCenters.unshift(data)
  },
}

export const actions = {
  // Called from homw page to get payments based on the query
  async search_by_district({ commit }, payload) {
    try {
      commit('loading', true)
      const tommorrow = new moment().add(1, 'days').format('DD-MM-YYYY')
      const response = await this.$axios.get(
        `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict`,
        {
          params: {
            district_id: payload,
            date: tommorrow,
          },
        }
      )
      commit('loading', false)
      commit('set_centers', response.data.sessions)
      $nuxt.$router.push('/search/center-list')
    } catch (err) {
      commit('loading', false)
      commit(
        'snackbar/add',
        'CoWin servers are busy. Please try again after some time.',
        { root: true }
      )
    }
  },
  async get_center_details({ commit }, payload) {
    try {
      commit('loading', true)
      const tommorrow = new moment().add(1, 'days').format('DD-MM-YYYY')
      const response = await this.$axios.get(
        `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByCenter`,
        {
          params: {
            center_id: payload,
            date: tommorrow,
          },
        }
      )
      commit('loading', false)
      commit('update_recent_search', response.data)
      return response.data
    } catch (err) {
      commit('loading', false)
      commit(
        'snackbar/add',
        'CoWin servers are busy. Please try again after some time.',
        { root: true }
      )
    }
  },
}
