<template>
  <div>
    <Header />
    <div class="sitetop-hide-ui">
      <div class="top-kv">
        <div class="container">
          <div class="top-kv__container">
            <TopTitle />
            <TopContainer />
          </div>
        </div>
      </div>
    </div>
    <Container />
      <div id="top-easy-to-pay" data-w-id="Div Block" class="top-section top-seciton-concept--pay-easy i-intoview-trigger" style="z-index: 1;">
          <div class="container">
              <div class="top-section-concept__index">
                  <h2 class="top-section-concept__index__text">
                      <span class="top-section-concept__index__main-row i-intoview-target-frame">
                          <strong class="top-section-concept__index__inner-text i-intoview-target switch-show-br">
                              簡単すぎる使い方
                          </strong>
                      </span>
                  </h2>
              </div>

              <div class="top-section-concept__content">
                  <div class="pay-easy-reasons">
                      <div class="be-easy-reason">
                          <h3 class="be-easy-reason__index switch-show-br use-app">ファイルをダウンロード</h3>
                          <div class="be-easy-reason__img-area"><img src="@/assets/img/use-qr.jpg" loading="lazy" sizes="(max-width: 479px) 93vw, (max-width: 991px) 96vw, (max-width: 1439px) 55vw, 791px" srcset="@/assets/img/use-qr.jpg 1080w, @/assets/img/use-qr.jpg 1600w, @/assets/img/use-qr.jpg 2000w" alt="" class="be-easy-reason__img" /></div>
                          <div class="pay-easy-reason__text">
                              <div class="be-easy-reason__description be-easy-reason__description--prepaid">
                                  <p>説明</p>
                              </div>
                          </div>
                      </div>
                      <div class="be-easy-reason">
                          <h3 class="be-easy-reason__index switch-show-br use-app">ファイルをアップロード</h3>
                          <div class="be-easy-reason__img-area be-easy-reason__img-area--align-left"><img src="@/assets/img/use-qr.jpg" loading="lazy" sizes="(max-width: 479px) 93vw, (max-width: 991px) 96vw, (max-width: 1439px) 55vw, 791px" srcset="@/assets/img/use-qr.jpg 500w, @/assets/img/use-qr.jpg 1080w, @/assets/img/use-qr.jpg 1600w, @/assets/img/use-qr.jpg 2000w" alt="" class="be-easy-reason__img" /></div>
                          <div class="pay-easy-reason__text">
                              <div class="be-easy-reason__description">
                                  <p>説明</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    <Footer />
  </div>
</template>
<script>
import Header from '../headers/header.vue'
import TopTitle from './topTitle.vue'
import TopContainer from './topContainer.vue'
import Container from './container.vue'
import Footer from '../footers/footer.vue'

export default {
  name: 'homePage',
  components: {
    Header,
    TopTitle,
    TopContainer,
    Container,
    Footer
  }
}
</script>

<style>
@import "../../assets/css/fr.css";
@import "../../assets/css/style.css";
@import "../../assets/css/responsive.css";
@import "../../assets/css/main.css";
</style>
