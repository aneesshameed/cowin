<template>
  <div>
    <template v-if="filteredList.length == 0">
      <!-- <div class="tw-text-xl tw-text-gray-600">
        There are no vaccines available<br />
        near to you. Please try after some time
      </div> -->
      <vs-alert relief>
        <template #title> No centers </template>
        There are no vaccines available in any centers near to you.
        <div class="tw-mt-3">
          <b>What next?</b><br />
          Once vaccines reaches centers near to you then the same will show up
          here. Please try after some time.
        </div>
      </vs-alert>
    </template>
    <template v-else>
      <vs-row justify="center">
        <vs-table v-model="selectedCenter">
          <template #tbody>
            <vs-tr>
              <vs-td>
                <div class="tw-text-xl tw-text-gray-600 tw-font-bold">
                  Select your center
                </div>
              </vs-td>
            </vs-tr>
            <vs-tr
              :key="i"
              v-for="(tr, i) in filteredList"
              :data="tr"
              :is-selected="selectedCenter == tr"
              w="12"
            >
              <nuxt-link :to="`/center/${tr.center_id}`">
                <vs-td>
                  {{ tr.name }}
                </vs-td>
                <vs-td>
                  <vs-row>
                    <vs-col>
                      <vs-button
                        size="mini"
                        :warn="tr.fee_type == 'Paid'"
                        style="display: inline"
                      >
                        {{ tr.fee_type }}
                      </vs-button>
                      <template v-if="tr.available_capacity > 0">
                        <i class="bx bxs-circle" style="color: green"></i>
                      </template>
                    </vs-col>
                  </vs-row>
                </vs-td>
              </nuxt-link>
            </vs-tr>
          </template>
        </vs-table>
      </vs-row>
    </template>

    <div class="tw-py-5"></div>
  </div>
</template>
<script>
import _ from 'lodash'
import { mapState } from 'vuex'

export default {
  layout: 'search',
  data() {
    return {
      loading: false,
      selectedCenter: null,
    }
  },
  computed: {
    ...mapState({
      centers: (state) => state.centers,
      userSettings: (state) => state.userSettings,
    }),
    filteredList() {
      let filteredList = this.centers
      if (!this.userSettings.paidSlots) {
        filteredList = _.filter(filteredList, function (item) {
          return item.fee_type == 'Free'
        })
      }

      let dose1 = []
      if (this.userSettings.dose1) {
        dose1 = _.filter(filteredList, function (item) {
          return item.available_capacity_dose1 > 0
        })
      }

      let dose2 = []
      if (this.userSettings.dose2) {
        dose2 = _.filter(filteredList, function (item) {
          return item.available_capacity_dose2 > 0
        })
      }

      let eighteenAbove = []
      if (this.userSettings.eighteenAbove) {
        eighteenAbove = _.filter(filteredList, function (item) {
          return item.min_age_limit == 18
        })
      }

      let fourtyFiveAbove = []
      if (this.userSettings.fourtyFiveAbove) {
        fourtyFiveAbove = _.filter(filteredList, function (item) {
          return item.min_age_limit == 45
        })
      }

      const concatenated = _.concat(
        dose1,
        dose2,
        eighteenAbove,
        fourtyFiveAbove
      )

      const uniqueItems = _.uniqBy(concatenated, 'center_id')

      const sorted = _.sortBy(uniqueItems, 'available_capacity')

      return sorted
    },
    free(item) {
      return true
    },
  },
}
</script>
<style>
.vs-table table {
  min-width: 300px !important;
}
</style>
