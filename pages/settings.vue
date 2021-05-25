<template>
  <div>
    <div class="tw-px-5">
      <vs-row class="tw-my-3">
        <vs-col w="10">
          <span class="tw-font-bold"> Show paid slots </span>
        </vs-col>
        <vs-col w="2">
          <vs-switch v-model="paidSlots" />
        </vs-col>
      </vs-row>
      <vs-row class="tw-my-3">
        <vs-col w="10">
          <span class="tw-font-bold"> Show dose 1 </span>
        </vs-col>
        <vs-col w="2">
          <vs-switch v-model="dose1" />
        </vs-col>
      </vs-row>
      <vs-row class="tw-my-3">
        <vs-col w="10">
          <span class="tw-font-bold"> Show dose 2 </span>
        </vs-col>
        <vs-col w="2">
          <vs-switch v-model="dose2" />
        </vs-col>
      </vs-row>
      <vs-row class="tw-my-3">
        <vs-col w="10">
          <span class="tw-font-bold"> Show slots for age 45+ </span>
        </vs-col>
        <vs-col w="2">
          <vs-switch v-model="fourtyFiveAbove" />
        </vs-col>
      </vs-row>
      <vs-row class="tw-my-3">
        <vs-col w="10">
          <span class="tw-font-bold"> Show slots for age 18+ </span>
        </vs-col>
        <vs-col w="2">
          <vs-switch v-model="eighteenAbove" />
        </vs-col>
      </vs-row>
      <vs-row class="tw-mt-5">
        <vs-col>
          <span class="tw-font-bold">The app is very safe to use.</span> None of
          your personal details, device details or location data are sent to any
          servers or stored any where. The connections are made between your
          phone and CoWin servers.
        </vs-col>
      </vs-row>
      <vs-row class="tw-mt-5">
        <vs-col>
          CoWin server restricts multiple queries coming from save device in a
          short period of time. When you see any error in querying, then
          <span class="tw-font-bold"
            >please try to use the app after some time.</span
          >
        </vs-col>
      </vs-row>
      <vs-row class="tw-mt-5">
        <vs-col>
          The app will not be able to help you in booking slots as there are
          many more authentication protocol to be done between CoWin and Adhar
          servers.
          <span class="tw-font-bold"
            >The same is out of scope for this project</span
          >
        </vs-col>
      </vs-row>
      <vs-row class="tw-mt-5">
        <vs-col>
          We may deploy better version in future.
          <span class="tw-font-bold"
            >Please watch this space for change in app and policies</span
          >
        </vs-col>
      </vs-row>
      <div class="tw-mt-5"></div>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'settings',
  data() {
    return {}
  },
  computed: {
    paidSlots: {
      get: function () {
        return this.$store.state.userSettings.paidSlots
      },
      set: function (n) {
        this.$store.commit('set_paid_slots', n)
      },
    },
    dose1: {
      get: function () {
        return this.$store.state.userSettings.dose1
      },
      set: function (n) {
        this.$store.commit('set_dose1', n)
      },
    },
    dose2: {
      get: function () {
        return this.$store.state.userSettings.dose2
      },
      set: function (n) {
        this.$store.commit('set_dose2', n)
      },
    },
    eighteenAbove: {
      get: function () {
        return this.$store.state.userSettings.eighteenAbove
      },
      set: function (n) {
        this.$store.commit('set_eighteen_above', n)
      },
    },
    fourtyFiveAbove: {
      get: function () {
        return this.$store.state.userSettings.fourtyFiveAbove
      },
      set: function (n) {
        this.$store.commit('set_fourty_five_above', n)
      },
    },
  },
}
</script>
