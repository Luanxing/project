<template>
  <div>
    <navbar></navbar>
    <router-view></router-view>
    
  </div>
</template>

<script>
import navbar from '@/components/navbar'

// Vue.component("Tarbar",Tarbar)
export default {
  mounted(){
     document.documentElement.style.fontSize = window.innerWidth / 32 +"px"     
  },
  components: {
    navbar
  },
  methods:{
   
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
