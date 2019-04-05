import Vue from 'vue'
import Router from 'vue-router'
import home from './views/home.vue'
import index from './views/index.vue'
import parking from './views/parking.vue'
import fix from './views/fix.vue'
import infoFix from './views/fix/infoFix.vue'
import infoParking from './views/parking/infoParking.vue'
import addParking from './views/parking/addParking.vue'
import user from './views/user.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: home,
      children:[
        {
          path:'/',
          component: index
        },
        {
          path:'/index',
          component: index
        },
        {
          path:'/parking',
          component: parking
        },
        {
          path:'/fix',
          component: fix
        },
        {
          path:'/infoFix',
          component: infoFix
        },
        {
          path:'/infoParking',
          component: infoParking
        },
        {
          path:'/addParking',
          component: addParking
        },
        {
          path:'/user',
          component: user
        },
      ]
    }
  ]
})
