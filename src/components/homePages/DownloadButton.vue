<template>
  <button class="button-link store-badges__link w-inline-block middle" v-on:click="show()">
    <img src="@/assets/img/download.svg" alt="" width="160px">
  </button>
</template>

<script>
export default {
  name: 'DownloadButton',
  methods: {
    show () {
      console.log(this.$modal)
      this.$modal.show('show-qr')
    }
  }
}
</script>

<style scoped>
@import "../../assets/css/fr.css";
@import "../../assets/css/style.css";
@import "../../assets/css/responsive.css";
@import "../../assets/css/main.css";
</style>
