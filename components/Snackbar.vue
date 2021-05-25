<template></template>

<script>
export default {
  created() {
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'snackbar/add') {
        const noti = this.$vs.notification({
          color: 'primary',
          title: 'Error',
          text: state.snackbar.snack,
        })
      }
    })
  },
}
</script>
