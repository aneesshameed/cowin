<template>
  <div class="tw-p-3">
    <span class="tw-text-3xl tw-font-bold primary--text">{{
      error.statusCode
    }}</span>
    <br />

    <span class="tw-text-3xl"> {{ error.message }} </span><br />
    <br />
    <NuxtLink to="/">
      <vs-button>Back To Home</vs-button>
    </NuxtLink>
  </div>
</template>
<script>
export default {
  layout: 'index',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred',
    }
  },
  methods: {
    stringify(e) {
      return JSON.stringify(e)
    },
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title,
    }
  },
}
</script>
