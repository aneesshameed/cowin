<template>
  <div class="container">
    <vs-row>
      <vs-col>
        <div
          class="
            tw-flex tw-justify-center tw-text-xl tw-text-gray-600 tw-font-bold
          "
        >
          Made with
        </div>
      </vs-col>
    </vs-row>
    <vs-row justify="center" class="tw-mt-5">
      <vs-col w="6">
        <div class="tw-flex tw-flex-col tw-items-center tw-mb-5">
          <img
            src="vue.jpg"
            alt="vue"
            style="padding: 10px"
            width="200px;"
          />
        </div>
        <div class="tw-flex tw-flex-col tw-items-center tw-mb-5">
          <img
            src="nuxt.jpg"
            alt="nuxt"
            style="padding: 10px"
            width="200px;"
          />
        </div>
        <div class="tw-flex tw-flex-col tw-items-center tw-mb-5">
          <img
            src="vuesax.jpg"
            alt="vuesax"
            style="padding: 10px"
            width="200px;"
          />
        </div>
        <div class="tw-flex tw-flex-col tw-items-center tw-mb-5">
          <img
            src="tailwind.jpg"
            alt="tailwind"
            style="padding: 10px"
            width="200px;"
          />
        </div>
        <div class="tw-flex tw-flex-col tw-items-center tw-mb-5">
          <img
            src="vercel.jpg"
            alt="vercel"
            style="padding: 10px"
            width="200px;"
          />
        </div>
      </vs-col>
    </vs-row>
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
