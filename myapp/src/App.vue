<template>
  <div>
    <navbar v-show='isNavbarshow'></navbar>
    <router-view></router-view>
    <navfooter></navfooter>
  </div>
</template>

<script>
import navbar from '@/components/navbar'
import navfooter from '@/components/footer'
import {mapState} from 'vuex'
// Vue.component("Tarbar",Tarbar)
export default {
  mounted () {
    document.documentElement.style.fontSize = window.innerWidth / 32 + 'px'
  },
  components: {
    navbar,
    navfooter
  },
  //非父子通信访问状态
  computed: {
    ...mapState(['isNavbarshow'])
  },
}
</script>

<style lang="scss">
*{margin:0;padding:0}
 ul{
   li{
     list-style: none;
   }
 }
</style>
