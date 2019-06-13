<template>
    <div >
        <lunbo :key="scrollImglist.length"> 
            <div class="swiper-slide" v-for="(data) in scrollImglist" :key="data.url">
            <img :src="data.image" alt="">
          </div>
        </lunbo>
        <div>
            <ul>
                <li v-for="(data,key) in navigatorIcon" :key="key">{{data.iconTitle}}<img :src=data.image></li>
            </ul>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import lunbo from '@/components/lunbo'
export default {
    data(){
        return{
            scrollImglist:[],
            navigatorIcon:[]
        }
    },
    mounted(){
        axios({
            url:'/PageSubArea/MarketFirstPageNew.api?t=20196112064759457'
        }).then(res=>{
            console.log(res.data.scrollImg)
            this.scrollImglist = res.data.scrollImg
            this.navigatorIcon = res.data.navigatorIcon
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
