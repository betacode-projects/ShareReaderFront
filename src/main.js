// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VModal from 'vue-js-modal'
import store from './store'
import VueCookies from 'vue-cookies'

Vue.use(VueCookies)
Vue.use(VModal)
Vue.config.productionTip = false
Vue.$cookies.config('7d')
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
