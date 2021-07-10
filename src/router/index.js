import Vue from 'vue'
import Router from 'vue-router'
import homePage from '@/components/homePages/homePage'
import NotFoundComponent from '@/components/NotFound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: homePage
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFoundComponent
    }
  ]
})
