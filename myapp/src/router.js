import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/views/Main/Main.vue'
import Find from '@/views/Find/Find.vue'
import Shopping from '@/views/Shopping/Shopping.vue'
import Tickets from '@/views/Tickets/Tickets.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/main',
      component: Main
    },
    {
      path: '/tickets',
      component: Tickets
    },
    {
      path: '/find',
      component: Find
    },
    {
      path: '/shopping',
      component: Shopping
    },
    {
      path: '/',
      component: Main
      
    }
  ]
})
