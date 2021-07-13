<template>
  <div class="top-kv__text__detail">
      <QrModal />
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
              <form action="">
                  <a href="#" class="button-link store-badges__link w-inline-block middle" @click.prevent.stop="show">
                      <img src="@/assets/img/download.svg" alt="" width="160px">
                  </a>
              </form>
          </div>
      </div>
  </div>
</template>
<script>
import QrModal from '@/components/modules/qrModal.vue'
import axios from 'axios'
import {RECEIVER, URL} from '../../define/config'

export default {
  name: 'topContainer',
  components: {
    QrModal
  },
  methods: {
    show () {
      console.log(this.$modal)
      this.$modal.show('show-qr')
    },

    uploadFile (e) {
      const params = new FormData()
      params.append('file', e.target.files[0])
      console.log(e.target.files[0])

      axios.post(URL.UPLOAD_FILE, params).then((res) => {
        console.log('success')
        console.log(res)
      }).catch((error) => {
        console.log('error')
        console.log(error)
      })
    }
  }
}
</script>
<style>
@import "../../assets/css/fr.css";
@import "../../assets/css/style.css";
@import "../../assets/css/responsive.css";
@import "../../assets/css/main.css";
</style>
