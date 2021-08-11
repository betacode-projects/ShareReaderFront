<template>
  <button v-on:click="close()" class="btn btn-border">閉じる</button>
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
@import "../../assets/css/bootstrap.css";

.btn-border {
  border: 2px solid #000;
  border-radius: 0;
  background: #fff;
}

.btn-border:hover {
  color: #fff;
  background: #000;
}
</style>
