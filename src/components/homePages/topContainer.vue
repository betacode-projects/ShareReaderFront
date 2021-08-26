<template>
  <div class="top-kv__text__detail">
    <div class="top-kv__text__detail__intaraction-frame top-kv__text__detail__intaraction-frame--description">
      <h1 class="top-kv__text__description switch-style-hide-br loading-animation-enable top-title">
        QUICK・SHARE ・ UPLOAD<br/>Share ReaderはQRコードで<br>データ共有できるサービスです。
      </h1>
    </div>
    <div class="top-kv__text__detail__intaraction-frame">
      <div id="yoko">
        <form action="" enctype="multipart/form-data">
          <input type="file" id="fopen" style="display:none;" @change="uploadFile">
          <a href="Javascript:document.getElementById('fopen').click();" class="store-badges__link w-inline-block middle">
            <img src="@/assets/img/upload.svg" alt="" width="160px">
          </a>
        </form>
        <DownloadButton />
      </div>
      <p style="text-align: center;">{{status}}</p>
    </div>
  </div>
</template>

<script>
import QrModal from '@/components/modulesqrModal'
import DownloadButton from './DownloadButton'
import {URL, SENDER} from '../../define/config'
import axios from 'axios'

export default {
  name: 'TopContainer',
  components: {
    QrModal,
    DownloadButton
  },
  data () {
    return {
      status: ''
    }
  },
  methods: {
    uploadFile (e) {
      e.preventDefault()

      this.status = 'ファイルをアップロード中...'
      const params = new FormData()
      params.append('file', e.target.files[0])
      console.log(e.target.files[0])

      axios.post(URL.UPLOAD_FILE, params).then((res) => {
        console.log('success')
        console.log(res)
        this.$cookies.set(SENDER.PRIVATE_TOKEN, res.data.data.token.private)
        this.$cookies.set(SENDER.PUBLIC_TOKEN, res.data.data.token.public)

        window.location.href = '#/dashboard'
      }).catch((error) => {
        this.status = 'エラーが発生しました'
        console.log('error')
        console.log(error)
      })
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
