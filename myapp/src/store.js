import Vue from 'vue'
import Vuex from 'vuex'
import {SHOW_NAVBAR_MUTATION,HIDE_NAVBAR_MUTATION} from '@/type/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isNavbarshow:true,
  },
  mutations: {
    [HIDE_NAVBAR_MUTATION](state,payload){
      state.isNavbarshow=payload
    },
    [ SHOW_NAVBAR_MUTATION](state,payload){
      state.isNavbarshow=payload
    },
  },
  actions: {

  }
})
