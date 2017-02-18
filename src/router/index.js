import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/pages/home'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }
  ]
})
