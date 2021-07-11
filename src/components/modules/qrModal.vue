<template>
    <div>
        <modal name="show-qr" width="80%" height="70%">
            <div class="modal-header">
                <h2>QRコード</h2>
            </div>
            <div class="modal-body">
                <div class="qrcode">
                    <VueQrcode v-show="publicToken" :value="publicToken" :options="option" tag="img"></VueQrcode>
                </div>
                <button v-on:click="hide">閉じる</button>
            </div>
        </modal>
    </div>
</template>

<script>
import VueQrcode from '@chenfengyuan/vue-qrcode'
import axios from 'axios'

export default {
  name: 'qrModal',
  components: {
    VueQrcode
  },
  methods: {
    hide () {
      this.$modal.hide('show-qr')
    }
  },
  data () {
    return {
      publicToken: '',
      option: {
        errorCorrectionLevel: 'M',
        maskPattern: 0,
        margin: 10,
        scale: 2,
        width: 300,
        color: {
          dark: '#000000FF',
          light: '#FFFFFFFF'
        }
      }
    }
  },
  mounted () {
    let privateToken = this.$cookies.get('receiver_private_token') || ''
    console.log('private: ' + privateToken)

    axios.post('http://localhost:3000/v1/api/token', {
      headers: {
        Authorization: `Bearer ${privateToken}`
      }
    }).then(res => {
      console.log('success')
      console.log(res)
    }).catch(err => {
      console.log('error')
      console.log(err)
    })
  }
}

</script>

<style scoped>
  @import "https://cdn.jsdelivr.net/npm/vue-js-modal@1.3.31/dist/styles.css";

  h2 {
    text-align: center;
    font-size: 2em;
    margin: 10px;
  }

  .qrcode {
    display: flex;
    justify-content: center;
  }
</style>
