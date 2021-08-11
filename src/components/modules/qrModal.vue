<template>
  <modal name="show-qr" @before-open="startConnection" @closed="stopConnection" width="80%" height="400px">
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
import { URL, RECEIVER } from '../../define/config'
import { Socket } from 'phoenix'

const socketUrl = process.env.SOCKET_URL + '/socket'
let socket = new Socket(socketUrl, {
  logger: (kind, msg, data) => { console.log(`${kind}: ${msg}`, data) }
})
socket.connect()
let channel = null

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
    },
    startConnection () {
      channel = socket.channel('room:' + this.$cookies.get(RECEIVER.PUBLIC_TOKEN), {})
      channel.join()
        .receive('ok', resp => { console.log('Joined successfully', resp) })
        .receive('error', resp => { console.log('Unable to join', resp) })

      channel.on('downloaded_alert', payload => {
        axios.get(URL.process.env.API_URL + 'file?sender=' + payload.body.private_token + '&receiver=' + RECEIVER.PRIVATE_TOKEN).then(res => {
          console.log(res)

          /*
          * socket通信が成功して相手から送られてきたプライベートトークンをもとにファイルダウンロードのapiを実行
          * ここにファイルダウンロードのレスポンスを記述してね☆
          */
        })
      })
    },
    stopConnection () {
      console.log('stopConnection function started!!')
      // channel.onClose((e) => { console.log(`closed ${e}`) })
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
    const privateToken = this.$cookies.get(RECEIVER.PRIVATE_TOKEN) || ''
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
    axios.defaults.headers.common = {}
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
