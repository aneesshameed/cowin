<template>
  <div>
    <vs-row justify="space-between">
      <vs-col w="10">
        <div class="tw-text-xl tw-text-gray-600 tw-font-bold">
          {{ centerDetails.centers.name }}
        </div>
      </vs-col>
      <vs-col w="2">
        <vs-button size="mini" style="display: inline">
          {{ centerDetails.centers.fee_type }}
        </vs-button>
      </vs-col>
    </vs-row>
    <vs-row>
      <vs-col w="12">
        <div class="tw-text-gray-600 tw-font-bold">
          {{ centerDetails.centers.address }}
        </div>
      </vs-col>
    </vs-row>
    <vs-row>
      <vs-col w="12">
        <div class="tw-text-gray-600 tw-font-bold">
          {{ centerDetails.centers.district_name }}
        </div>
      </vs-col>
    </vs-row>
    <vs-row>
      <vs-col w="12">
        <div class="tw-text-gray-600 tw-font-bold">
          {{ centerDetails.centers.state_name }}
        </div>
      </vs-col>
    </vs-row>
    <vs-row>
      <vs-col w="12">
        <div class="tw-text-gray-600 tw-font-bold">
          {{ centerDetails.centers.pincode }}
        </div>
      </vs-col>
    </vs-row>
    <vs-row class="tw-mt-5">
      <vs-col>
        <vs-table>
          <template #thead>
            <vs-tr>
              <vs-th> Date </vs-th>
              <vs-th> Vaccine </vs-th>
              <vs-th> Age </vs-th>
              <vs-th> Count </vs-th>
            </vs-tr>
          </template>
          <template #tbody>
            <vs-tr
              :key="i"
              v-for="(tr, i) in centerDetails.centers.sessions"
              :data="tr"
            >
              <vs-td>
                {{ tr.date }}
              </vs-td>
              <vs-td>
                {{ tr.vaccine }}
              </vs-td>
              <vs-td> {{ tr.min_age_limit }}+ </vs-td>
              <vs-td>
                {{ tr.available_capacity }}
              </vs-td>
              <template #expand>
                <vs-row>
                  <vs-col w="6">
                    <vs-button-group>
                      <vs-button> Available Dose 1 </vs-button>
                      <vs-button border>
                        {{ tr.available_capacity_dose1 }}
                      </vs-button>
                    </vs-button-group>
                  </vs-col>
                  <vs-col w="6">
                    <vs-button-group>
                      <vs-button> Available Dose 2 </vs-button>
                      <vs-button border>
                        {{ tr.available_capacity_dose2 }}
                      </vs-button>
                    </vs-button-group>
                  </vs-col>
                </vs-row>
              </template>
            </vs-tr>
          </template>
        </vs-table>
      </vs-col>
    </vs-row>
    <vs-row class="tw-mt-5">
      <vs-col>
        <vs-button @click="pinToHome" :border="isPinned">
          <span v-if="isPinned">Unpin</span>
          <span v-else>Pin To Home </span>
        </vs-button>
      </vs-col>
    </vs-row>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  layout: 'center',
  async asyncData({ params, store, error }) {
    try {
      const centerDetails = await store.dispatch(
        'get_center_details',
        params.id
      )

      return {
        centerDetails,
      }
    } catch (err) {
      error({ statusCode: err.statusCode, message: err.message })
    }
  },
  computed: {
    ...mapState({
      pinnedCenters: (state) => state.pinnedCenters,
    }),
    isPinned() {
      for (let i = 0; i < this.pinnedCenters.length; i++) {
        if (
          this.pinnedCenters[i].centers.center_id ==
          this.centerDetails.centers.center_id
        )
          return true
      }
      return false
    },
  },
  methods: {
    pinToHome() {
      this.$store.commit('update_pinned_centers', this.centerDetails)
    },
  },
}
</script>
<style>
.vs-table table {
  min-width: 300px !important;
}
</style>
