import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { SHOW_NAVBAR_MUTATION, HIDE_NAVBAR_MUTATION } from '@/type/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isNavbarshow: true,
    hotlist: []
  },
  mutations: {
    [HIDE_NAVBAR_MUTATION] (state, payload) {
      state.isNavbarshow = payload
    },
    [ SHOW_NAVBAR_MUTATION] (state, payload) {
      state.isNavbarshow = payload
    },
    hotMutation (state, payload) {
      state.hotlist = payload
    }
  },
  actions: {
    getHotlistaction (store) {
      axios.get('/Service/callback.mi/Search/HotKeyWords.api?t=201961316224834462').then(res => {
        // console.log(res.data)
        store.commit('hotMutation', res.data)
      })
    }
  }
})
