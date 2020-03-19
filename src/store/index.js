import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pageName:"",
    drawer:true
  },
  mutations: {
    updatePageName(state, payload) {
      state.pageName = payload;
    },
    updateDrawer(state){
      state.drawer = !state.drawer
    } 
   },
  actions: {
    setPageName({ commit }, payload){
      commit('updatePageName',payload)
    }
  },
  modules: {
  }
})
