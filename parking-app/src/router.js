import Vue from 'vue'
import Router from 'vue-router'
import index from './views/index.vue'
import home from './views/home.vue'
import search from './views/search.vue'
import user from './views/user.vue'
import list from './views/user/list.vue'
import info from './views/user/info.vue'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      component: index,
      children: [{
          path: '/',
          component: home
        }, {
          path: '/home',
          component: home
        }, {
          path: '/search',
          component: search,
          name: 'search'
        },
        {
          path: '/user',
          component: user,
          name: 'user'
        },
      ]
    },
    {
      path: '/list',
      component: list
    },
    {
      path: '/info',
      component: info
    }
  ]
})