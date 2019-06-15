import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/views/Main/Main.vue'
import Find from '@/views/Find/Find.vue'
import Shopping from '@/views/Shopping/Shopping.vue'
import Tickets from '@/views/Tickets/Tickets.vue'
import Filmreview from '@/views/Find/finds/filmreview'
import Leaderboard from '@/views/Find/finds/leaderboard'
import News from '@/views/Find/finds/news'
import Trailer from '@/views/Find/finds/trailer'
import FindnewsDetail from '@/views/Find/find_newsdetail'
import FindreviewDetail from '@/views/Find/find_reviewdetail'
import FindleaderboarDetail from '@/views/Find/find_leaderboarddetail'
import FindleaderboarDetailtwo from '@/views/Find/find_leaderboarddetailtwo'
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
      component: Find,
      children: [
        {
          path: 'filmreview',
          component:Filmreview
        },
        {
          path: 'leaderboard',
          component: Leaderboard
        },
        {
          path: 'news',
          component: News
        },
        {
          path: 'trailer',
          component: Trailer
        },
        {
          path: '',
          redirect: '/find/news'
        },
      ]
    },
    {
      path: '/find_newsdetail/:dfqid',
      component: FindnewsDetail
    },
    {
      path: '/find_reviewdetail/:dfqid',
      component: FindreviewDetail
    },
    {
      path: '/find_leaderboarddetail/:dfqid',
      component: FindleaderboarDetail
    },
    {
      path: '/find_leaderboarddetailtwo/:dfqid',
      component: FindleaderboarDetailtwo
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
