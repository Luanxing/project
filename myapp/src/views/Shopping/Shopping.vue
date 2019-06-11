<template>
    <div v-if="scrollImglist">
        <lunbo>
            <div class="swiper-slide" v-for="(data,index) in scrollImglist" :key="index">
            <img :src="data.image" alt="">
          </div>
        </lunbo>
    </div>
</template>
<script>
import axios from 'axios'
import lunbo from '@/components/lunbo'
export default {
    data(){
        return{
            scrollImglist:[]
        }
    },
    mounted(){
        axios({
            url:'/PageSubArea/MarketFirstPageNew.api?t=20196112064759457'
        }).then(res=>{
            console.log(res.data.scrollImg)
            this.scrollImglist = res.data.scrollImg
        })
    },
     components: {
        lunbo
  }
}
</script>
<style lang="scss" scoped>
.swiper-slide{
  .swiper-pagination-bullet-active{
      background: #fff;
            }
}

</style>