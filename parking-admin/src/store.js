import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      url:"http://134.175.55.2:8080/parking-manage-children/",
      carId:0,
  },
  mutations: {
    getStorageId (state) {
      state.carId = window.localStorage.getItem('carId');
    },
  },
  actions: {
    reflashSet ({commit}) {
      commit('getStorageId')
    }
  }
})
