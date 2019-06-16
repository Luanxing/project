<template>
    <div class="main" >
    </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      datalist: []
    }
  },
  mounted () {
    axios.get(`/Service/callback.mi/News/Detail.api?newsId=${this.$route.params.id}&t=201961319344144292`).then(res => {
      console.log(res.data)
      this.datalist = res.data
      document.querySelector('.main').innerHTML = this.datalist.content
    })
  }

}
</script>

<style lang="scss" scoped>
    .main{
        overflow: hidden;
    }

</style>
