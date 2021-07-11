<template>
    <modal name="show-qr" :draggable="true" :resizable="true" width="85%" height="70%">
        <div class="modal-header">
            <h2>QRコード</h2>
        </div>
        <div class="modal-body">
            <p>you're reading this text in a modal!</p>
            <button v-on:click="hide">閉じる</button>
        </div>
    </modal>
</template>

<script>

export default {
  name: 'qrModal',
  methods: {
    hide () {
      this.$modal.hide('modal-test')
    }
  }
}

</script>

<style scoped>
  @import "https://cdn.jsdelivr.net/npm/vue-js-modal@1.3.31/dist/styles.css";
</style>
