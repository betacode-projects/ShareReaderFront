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
              <form action="">
                  <a href="" class="button-link store-badges__link w-inline-block middle">
                      <img src="@/assets/img/download.svg" alt="" width="160px">
                  </a>
              </form>
          </div>
      </div>
  </div>
</template>
<script>
export default {
  name: 'topContainer'
}
</script>
