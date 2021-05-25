<template>
  <div>
    <div class="tw-p-6 tw-bg-blue-700">
      <vs-row justify="center">
        <vs-col lg="4" sm="10" xs="12">
          <vs-row>
            <vs-col vs-type="flex" w="2" class="tw--ml-2">
              <vs-button circle icon flat color="#fff" @click="pop">
                <i class="bx bx-arrow-back"></i>
              </vs-button>
            </vs-col>
          </vs-row>
          <vs-row>
            <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="6"
              ><div class="tw-text-4xl tw-font-bold tw-text-white tw-pt-3">
                Settings
              </div>
            </vs-col>
          </vs-row>
        </vs-col>
      </vs-row>
    </div>
    <div class="tw-p-3 tw-mt-5 calc-height">
      <vs-row justify="center">
        <vs-col lg="4" sm="10" xs="12">
          <Nuxt />
        </vs-col>
      </vs-row>
    </div>
    <footer>
      <div class="tw-p-6 tw-py-10 tw-bg-blue-700">
        <vs-row justify="center">
          <vs-col lg="4" sm="10" xs="12">
            <vs-button color="white" active to="/privacy">
              Privacy Policy
            </vs-button>
          </vs-col>
        </vs-row>
        <vs-row justify="center">
          <vs-col lg="4" sm="10" xs="12">
            <vs-button color="white" active to="/technology"> Technology </vs-button>
          </vs-col>
        </vs-row>
      </div>
    </footer>
    <Snackbar />
  </div>
</template>

<script>
import Snackbar from '~/components/Snackbar.vue'
export default {
  components: {
    Snackbar,
  },
  methods: {
    pop() {
      this.$router.go(-1)
    },
  },
}
</script>
<style>
.calc-height {
  min-height: calc(100vh - 150px);
}
</style>
