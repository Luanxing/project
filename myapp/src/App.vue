<template>
  <div>
    <navbar></navbar>
    <router-view></router-view>
    <navfooter></navfooter>
  </div>
</template>

<script>
import navbar from '@/components/navbar'
import navfooter from '@/components/footer'
// Vue.component("Tarbar",Tarbar)
export default {
  mounted () {
    document.documentElement.style.fontSize = window.innerWidth / 32 + 'px'
  },
  components: {
    navbar,
    navfooter
  },
  methods: {

  }
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
