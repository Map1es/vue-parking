import Vue from 'vue'
import Router from 'vue-router'
import index from './views/index.vue'
import home from './views/home.vue'
import user from './views/user.vue'
import list from './views/list.vue'
import search from './views/search.vue'
import cost from './views/cost.vue'
import login from './views/login.vue'
import registered from './views/registered.vue'
import updateUser from './views/user/updateUser.vue'
import userInfo from './views/user/userInfo.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    component: login
  }, {
    path: '/login',
    component: login
  }, {
    path: '/registered',
    name: 'registered',
    component: registered
  }, {
    path: '/index',
    component: index,
    children: [{
      path: '/home',
      component: home
    }, {
      path: '/user',
      component: user,
    }, {
      path: '/search',
      component: search,
    }]
  }, {
    path: '/list',
    component: list
  }, {
    path: '/cost',
    component: cost
  }, 
  {
    path: '/updateUser',
    component: updateUser
  },
  {
    path: '/userInfo',
    component: userInfo
  }]
})