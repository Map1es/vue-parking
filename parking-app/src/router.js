import Vue from 'vue'
import Router from 'vue-router'
import home from './views/home.vue'
import search from './views/search.vue'
import user from './views/user.vue'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      component: home,
    },
    {
      path: '/home',
      component: home,
      name: 'home'
    },
    {
      path: '/search',
      component: search,
      name: 'search'
    },
    {
      path: '/user',
      component: user,
      name: 'user'
    }
  ]
})