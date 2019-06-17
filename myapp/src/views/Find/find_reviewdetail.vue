<template>
<div class="main" >
    </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      datalist: {}
    }
  },

  mounted () {
    axios.get(`/Service/callback.mi/Review/Detail.api?reviewId=${this.$route.params.dfqid}&t=201961420191314687`)
      .then(res => {
        console.log(res.data.content)
        this.datalist = res.data
        document.querySelector('.main').innerHTML = this.datalist.content
      })
  }

}
</script>

<style lang="scss" scoped >

</style>
