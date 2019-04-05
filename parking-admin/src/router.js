import Vue from 'vue'
import Router from 'vue-router'
import home from './views/home.vue'
import login from './views/login.vue'
import updateParking from './views/updateParking.vue'
import index from './views/index.vue'
import fix from './views/fix.vue'
import addFix from './views/addFix.vue'
import car from './views/car.vue'
import parking from './views/parking.vue'


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
          path: '/updateParking',
          component: updateParking
        },
        {
          path: '/parking',
          component: parking
        },
        {
          path: '/index',
          component: index
        },
        {
          path: '/fix',
          component: fix
        },
        {
          path: '/addFix',
          component: addFix
        },
        {
          path: '/car',
          component: car
        }
      ]
    }
  ]
})