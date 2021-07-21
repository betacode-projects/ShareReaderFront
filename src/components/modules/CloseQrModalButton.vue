<template>
  <button v-on:click="close()" class="close-btn">閉じる</button>
</template>

<script>
export default {
  name: 'CloseQrModalButton',
  methods: {
    close () {
      console.log('modal close')
      this.$modal.hide('show-qr')
    }
  }
}
</script>

<style scoped>
.close-btn {
  text-align: center;
}
</style>
