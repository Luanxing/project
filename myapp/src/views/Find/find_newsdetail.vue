<template>
<div class="main" >
    </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      datalist: {},
      datalist2: {}
    }
  },

  mounted () {
    axios.get(`/Service/callback.mi/News/Detail.api?newsId=${this.$route.params.dfqid}&t=201961320353811423`)
      .then(res => {
        console.log(res.data.content)
        this.datalist = res.data
        document.querySelector('.main').innerHTML = this.datalist.content
      })
    // ,
    // axios.get('/html5/20190531185056/css/2014/mobile.css')
    // .then(res=>{
    // 	console.log(res.data.newsList)
    // 	this.datalist2 = res.data
    // })
  }

}
</script>

<style lang="scss" scoped >
// @import url(http://static3.mtime.cn/html5/20190531185056/css/2014/mobile.css);
</style>
