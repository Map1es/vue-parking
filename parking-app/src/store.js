import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    url: "http://134.175.55.2:8080/parking-manage-children/",
    url1:"http://134.175.55.2:8080/parking-manage/",
    userid:''
  },
  mutations: {
    getStorageId (state) {
      state.userid = window.localStorage.getItem('userid');
    },
  },
  actions: {
    reflashSet ({commit}) {
      commit('getStorageId')
    }
  },
})
