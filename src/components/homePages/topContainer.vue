<template>
  <div class="top-kv__text__detail">
    <div class="top-kv__text__detail__intaraction-frame top-kv__text__detail__intaraction-frame--description">
      <h1 class="top-kv__text__description switch-style-hide-br loading-animation-enable top-title">
        QUICK・SHARE ・ UPLOAD<br/>Share ReaderはQRコードで<br>データ共有できるサービスです。
      </h1>
    </div>
    <div class="top-kv__text__detail__intaraction-frame">
      <div id="yoko">
        <form action="">
          <input type="file" id="fopen" style="display:none;">
          <a href="Javascript:document.getElementById('fopen').click();" class="store-badges__link w-inline-block middle">
            <img src="@/assets/img/upload.svg" alt="" width="160px">
          </a>
        </form>
        <DownloadButton />
      </div>
    </div>
  </div>
</template>

<script>
import QrModal from '@/components/modules/qrModal.vue'
import DownloadButton from './DownloadButton'

export default {
  name: 'TopContainer',
  components: {
    QrModal,
    DownloadButton
  },
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
