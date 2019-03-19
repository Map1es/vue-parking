import Vue from 'vue'
import Router from 'vue-router'
import home from './views/home.vue'
import login from './views/login.vue'
import cost from './views/cost.vue'
import index from './views/index.vue'
import fix from './views/fix.vue'


Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/home',
      component: home,
      children: [{
          path: '/cost',
          component: cost
        },
        {
          path: '/index',
          component: index
        },
        {
          path: '/fix',
          component: fix
        },
      ]
    }
  ]
})