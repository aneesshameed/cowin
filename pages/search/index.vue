<template>
  <div>
    <div class="tw-ml-2 tw-text-xl tw-text-gray-600 tw-font-bold">
      Select your district
    </div>
    <div class="tw-mt-5">
      <vs-row>
        <vs-col>
          <vs-button
            v-for="item in districts"
            :key="item.district_id"
            style="display: inline"
            :flat="userSettings.district != item.district_id"
            @click="setDistrict(item.district_id)"
          >
            {{ item.district_name }}
          </vs-button>
        </vs-col>
      </vs-row>
      <vs-row class="tw-mt-5">
        <vs-col>
          <vs-button warn :loading="loading" @click="searchByDistrict">
            Next
          </vs-button>
        </vs-col>
      </vs-row>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  layout: 'search',
  data() {
    return {
      screen: 'districts',
      centers: [],
      districtId: null,
      centers: [],
      selectedCenter: null,
    }
  },
  computed: {
    ...mapState({
      loading: (state) => state.loading,
      districts: (state) => state.districts,
      userSettings: (state) => state.userSettings,
    }),
    isSelected(items, selectedItem) {
      return items.indexOf(selectedItem)
    },
  },
  methods: {
    setDistrict(id) {
      this.$store.commit('set_district', id)
      this.districtId = id
    },
    async searchByDistrict() {
      this.$store.dispatch('search_by_district', this.districtId)
    },
  },
}
</script>
<style>
.vs-table table {
  min-width: 300px !important;
}
</style>
