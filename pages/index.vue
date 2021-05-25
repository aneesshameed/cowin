<template>
  <div class="container">
    <template v-if="recentSearches.length == 0 && pinnedCenters.length == 0">
      <vs-row>
        <vs-col>
          <div class="tw-ml-2 tw-text-4xl tw-text-gray-600">
            It looks like<br />
            you are<br />
            new<br />
            here<br />
          </div>
        </vs-col>
      </vs-row>
      <vs-row class="tw-mt-5">
        <vs-col>
          <vs-button to="/search"> Start the search </vs-button>
        </vs-col>
      </vs-row>
    </template>
    <template v-else>
      <template v-if="pinnedCenters.length != 0">
        <div class="tw-ml-2 tw-text-xl tw-text-gray-600 tw-font-bold">
          Pinned Centers
        </div>
        <vs-row justify="center">
          <vs-col>
            <vs-table v-model="selectedCenter">
              <vs-tr>
                <vs-td></vs-td>
              </vs-tr>
              <template #tbody>
                <vs-tr
                  :key="i"
                  v-for="(tr, i) in pinnedCenters"
                  :data="tr"
                  :is-selected="selectedCenter == tr"
                >
                  <nuxt-link :to="`/center/${tr.centers.center_id}`">
                    <vs-td>
                      {{ tr.centers.name }}
                    </vs-td>
                    <vs-td>
                      <vs-row>
                        <vs-col>
                          <vs-button
                            size="mini"
                            :warn="tr.centers.fee_type == 'Paid'"
                            style="display: inline"
                          >
                            {{ tr.centers.fee_type }}
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
          </vs-col>
        </vs-row>
      </template>

      <template v-if="recentSearches.length != 0">
        <vs-row justify="center">
          <vs-col>
            <vs-table v-model="selectedCenter">
              <template #tbody>
                <vs-tr>
                  <vs-td>
                    <div class="tw-text-xl tw-text-gray-600 tw-font-bold">
                      Recent Searches
                    </div>
                  </vs-td>
                </vs-tr>

                <vs-tr
                  :key="i"
                  v-for="(tr, i) in recentSearches"
                  :data="tr"
                  :is-selected="selectedCenter == tr"
                >
                  <nuxt-link :to="`/center/${tr.centers.center_id}`">
                    <vs-td>
                      {{ tr.centers.name }}
                    </vs-td>
                    <vs-td>
                      <vs-row>
                        <vs-col>
                          <vs-button
                            size="mini"
                            :warn="tr.centers.fee_type == 'Paid'"
                            style="display: inline"
                          >
                            {{ tr.centers.fee_type }}
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
          </vs-col>
        </vs-row>
      </template>

      <vs-row class="tw-mt-5">
        <vs-col>
          <vs-button to="/search"> Start a new search </vs-button>
        </vs-col>
      </vs-row>
    </template>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      selectedCenter: null,
    }
  },
  computed: {
    ...mapState({
      recentSearches: (state) => state.recentSearches,
      pinnedCenters: (state) => state.pinnedCenters,
    }),
  },
}
</script>

<style></style>
