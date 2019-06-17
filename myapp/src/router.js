import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/views/Main/Main.vue'
import Find from '@/views/Find/Find.vue'
import Shopping from '@/views/Shopping/Shopping.vue'
import Tickets from '@/views/Tickets/Tickets.vue'
import Detail from '@/views/Main/detail/detail.vue'
import Inputdetail from '@/views/Main/detail/inputdetail.vue'
import Hotdetail from '@/views/Main/detail/hotdetail.vue'
import Finddetail from '@/views/Main/detail/finddetail.vue'
import cinemaDetail from '@/views/Tickets/cinemaDetail.vue'
import Filmreview from '@/views/Find/finds/filmreview'
import Leaderboard from '@/views/Find/finds/leaderboard'
import News from '@/views/Find/finds/news'
import Trailer from '@/views/Find/finds/trailer'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
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
        component: Filmreview
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
      }
    ]
  },

  {
    path: '/shopping',
    component: Shopping
  },
  {
    path: '/',
    component: Main

  },
  { // 创建动态路由
    path: '/detail/:id',
    name: 'detail',
    component: Detail
  },
  {
    path: '/inputdetail',
    component: Inputdetail
  },
  {
    path: '/finddetail',
    component: Finddetail
  },

  {
    path: '/hotdetail/:id',
    name: 'hotdetail',
    component: Hotdetail
  },
  {
    path: '/cinemaDetail/:zsid',
    component: cinemaDetail
}
  ]
})
