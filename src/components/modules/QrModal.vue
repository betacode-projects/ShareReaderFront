<template>
  <modal name="show-qr" width="80%" height="400px">
    <div class="modal-header">
      <h2>QRコード</h2>
      <p class="subscript-qr">ファイルの送信者に、このQRコードを読み取らせてください</p>
    </div>
    <div class="modal-body">
      <div class="qrcode">
        <VueQrcode v-show="publicToken" :value="publicToken" :options="option" tag="img"></VueQrcode>
      </div>
    </div>
    <div class="close-btn">
      <CloseQrModalButton class="close-btn" />
    </div>
  </modal>
</template>

<script>
import VueQrcode from '@chenfengyuan/vue-qrcode'
import CloseQrModalButton from './CloseQrModalButton'
import axios from 'axios'
import {URL, RECEIVER} from '../../define/config'
import Phoenix from 'phoenix'

const Socket = new Phoenix('', {params: {token: ''}})
Socket.connect()
let channel = Socket.channel('room:', {})
channel.join()
  .receive('ok', resp => { console.log('Joined successfully', resp) })
  .receive('error', resp => { console.log('Unable to join', resp) })

export default {
  name: 'QrModal',
  components: {
    VueQrcode,
    CloseQrModalButton
  },
  methods: {
    hide () {
      this.$modal.hide('show-qr')
    },
    reloadQrCode () {
      this.publicToken = this.$cookies.get(RECEIVER.PRIVATE_TOKEN)
    }
  },
  data () {
    return {
      publicToken: '',
      option: {
        errorCorrectionLevel: 'H',
        maskPattern: 0,
        margin: 5,
        width: 300,
        color: {
          dark: '#000000FF',
          light: '#FFFFFFFF'
        }
      }
    }
  },
  mounted () {
    let privateToken = this.$cookies.get(RECEIVER.PRIVATE_TOKEN) || ''
    console.log(this.$cookies)
    console.log('private: ' + privateToken)

    axios.defaults.headers.common = {'Authorization': `bearer ${privateToken}`}
    axios.post(URL.POST_TOKEN).then(res => {
      console.log(res)
      this.$cookies.set(RECEIVER.PRIVATE_TOKEN, res.data.data.private_token)
      this.$cookies.set(RECEIVER.PUBLIC_TOKEN, res.data.data.public_token)
      this.reloadQrCode()
    }).catch(err => {
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

  .subscript-qr {
    text-align: center;
    margin: 5px;
  }

  .qrcode {
    display: flex;
    justify-content: center;
  }

  .close-btn {
    text-align: center;
  }
</style>
