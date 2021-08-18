<template>
  <div id="qr-scanner">
    <div style="width: 100%; height: 50vh" id="reader"></div>
  </div>
</template>

<script>
import { Socket } from 'phoenix'
import { SENDER } from '../../define/config'

export default {
  name: 'QrcodeReader',
  data () {
    return {
      html5QrcodeScanner: null
    }
  },
  methods: {
    async onScanSuccess (data) {
      // 1. dataの形式チェック
      if (!this.checkTokenFormat(data)) {
        return console.log('do not match format')
      }

      // 2. トークンをroom_idとしてsocket通信
      const socketUrl = process.env.SOCKET_URL + '/socket'
      let socket = new Socket(socketUrl, {
        logger: (kind, msg, data) => console.log(`${kind}: ${msg}`, data)
      })
      socket.connect()
      let channel = socket.channel('room:' + data, {})
      channel.join()
        .receive('ok', resp => console.log('Joined successfully', resp))
        .receive('error', resp => console.log('Unable to join', resp))

      // 3. downloadのトリガーのアクションを投げる
      channel.push('download_alert', {publicToken: this.$cookies.get(SENDER.PUBLIC_TOKEN)})

      // 4. disconnect
      channel.onClose((e) => console.log(`closed ${e}`))
      socket.disconnect((e) => console.log(`disconnect ${e}`), 200, 'Processing is complete')
    },
    checkTokenFormat (token) {
      return token.length() === 32
    }
  },
  mounted () {
    this.html5QrcodeScanner = new window.Html5QrcodeScanner('reader', { fps: 20, qrbox: 250 }, false)
    this.html5QrcodeScanner.render(this.onScanSuccess)
    console.log(window)
  }
}
</script>

<style scoped>
select {
  width: 250px;
  padding-right: 1em;
  cursor: pointer;
  text-indent: 0.01px;
  text-overflow: ellipsis;
  border: none;
  outline: none;
  background: transparent;
  background-image: none;
  box-shadow: none;
  -webkit-appearance: none;
  appearance: none;
  position: relative;
  border: 1px solid #bbbbbb;
  border-radius: 2px;
  background: #ffffff;
  padding: 5px 5px 5px 5px;
  color: #666666;
}
select::-ms-expand {
  display: none;
}
select::before {
  position: absolute;
  top: 0.8em;
  right: 0.9em;
  width: 0;
  height: 0;
  padding: 0;
  content: '';
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid #666666;
  pointer-events: none;
}

button {
  font-size: 0.9em;
  padding: 8px 20px;
  background-color: #099;
  color: #fff;
  border-style: none;
  border-radius: 3px;
  transition: 0.3s;
}

button:hover {
    background-color: #0aa;
    color: #fff;
}

#reader__dashboard_section_fsr {
  width: 170px;
  font-size: 0.9em;
  padding-top: 5px;
  padding-bottom: 5px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  border-radius: 3px;
  background: #099;
  color: #fff;
  text-align: center;
  padding-top: 3px;
  padding-bottom: 3px;
  cursor:pointer;
  transition: 0.3s;
  text-decoration: none;
}
#reader__dashboard_section_fsr:hover {
  background:#0aa;
}
#reader__dashboard_section_fsr input[type=file] {
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  cursor:pointer;
  opacity:0;
}
#reader__dashboard_section_swaplink {
  margin: 0 auto;
  margin-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  display: block;
  position: relative;
  color: #099;
  width: 170px;
  text-align: center;
  text-decoration: none;
  background: rgba(255, 255, 255, 0.897);
  border:1px solid #099;
  transition: 0.3s;
  border-radius: 3px;
}
#reader__dashboard_section_swaplink:hover {
  background: #0aa;
  color: #fff;
  cursor: pointer;
  text-decoration: none;
}

#reader {
  margin: 0 auto;
  background-color: rgba(255, 255, 255, 0.205);
  border-radius:10px;
}

@media (min-width: 700px) {

}
</style>
