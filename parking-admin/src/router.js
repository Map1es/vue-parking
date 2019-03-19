import Vue from 'vue'
import Router from 'vue-router'
import home from './views/Home.vue'
import login from './views/login.vue'
import SearchCar from './views/car/SearchCar.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/SearchCar',
      name: 'SearchCar',
      component: SearchCar
    }
  ]
})
