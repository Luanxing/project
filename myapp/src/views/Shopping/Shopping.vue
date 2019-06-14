<template>
    <div v-if="this.$store.state.MarketFirstPageNewList">
        <lunbo :key="scrollImglist.length"> 
            <div class="swiper-slide" v-for="(data) in $store.state.MarketFirstPageNewList.scrollImg" :key="data.url">
            <img :src="data.image" alt="">
          </div>
        </lunbo>
        <div class="mailnav">
            <ul>
                <li v-for="(data,key) in $store.state.MarketFirstPageNewList.navigatorIcon" :key="key"><img :src=data.image><p>{{data.iconTitle}}</p></li>
            </ul>
        </div>
        <div class="mallshop" v-if="this.$store.state.MarketFirstPageNewList">
            <div class="shop1">
                <img :src="this.$store.state.MarketFirstPageNewList.cellA.img" alt="">
            </div>
            <div class="shop2">
               
                 <img :src="this.$store.state.MarketFirstPageNewList.cellC.list[0].image" alt="">
            </div>
            <div class="shop3">
               <img :src="this.$store.state.MarketFirstPageNewList.cellC.list[1].image" alt="">
            </div>
            <div class="shop4">
                 <img :src="this.$store.state.MarketFirstPageNewList.cellB.img" alt="">
            </div>
        </div>
        <sbswiper></sbswiper>
       <malltype></malltype>
    </div>
</template>
<script>
import axios from 'axios'
import lunbo from '@/components/lunbo'
import sbswiper from '@/components/sbswiper'
import malltype from '@/components/malltype'
export default {
    data(){
        return{
            MarketFirstPageNewList:{},
            scrollImglist:[],
            navigatorIcon:[],

        }
    },
    mounted(){
        axios({
            url:'/Service/callback.mi/PageSubArea/MarketFirstPageNew.api?t=20196112064759457'
        }).then(res=>{
            this.$store.state.MarketFirstPageNewList = res.data
            console.log(res.data.scrollImg)
            this.MarketFirstPageNewList = res.data
            this.scrollImglist = res.data.scrollImg
            this.navigatorIcon = res.data.navigatorIcon
        })
    },
     components: {
        lunbo,
        sbswiper,
        malltype
  }
}
</script>
<style lang="scss" scoped>
.swiper-slide{
  .swiper-pagination-bullet-active{
      background: #fff;
            }
}

.mailnav{
    border-bottom: 1px solid #e5e4e4;
    box-shadow: 0 0.2em 0.2em rgba(51,51,51,0.01);
    background: white;
    position: relative;
    z-index: 2;
    margin-bottom: 1.2rem;
box-sizing: content-box;
    ul{
        overflow: hidden;
        li{
            float: left;
            width: 25%;
            text-align: center;
            padding: 1.2rem 0 1.1rem;
            img{
                    width: 4rem;
                    height: 4rem;
                    margin: auto;
            }
        }
    }
}
.mallshop{
    background: #fff;
    position: relative;
    height: 28.7rem;
    margin-bottom: 1.2rem;
    .shop1{
            width: 50%;
    height: 19.2rem;
    left: 0;
    top: 0;
    z-index: 2;
        position: absolute;
    img{
            max-height: 19.2rem;
    max-width: 100%;
    width: 16rem;
    }
    }
    .shop2{
            width: 50%;
    height: 9.6rem;
    right: 0;
    z-index: 2;
        position: absolute;
    img{
            max-height: 9.6rem;
    max-width: 100%;
    width: 16rem;
    }
    }
    .shop3{
            width: 50%;
    height: 9.6rem;
    top: 9.6rem;
    right: 0;
        position: absolute;
     img{
            max-height: 9.6rem;
    max-width: 100%;
    width: 16rem;
    }
    }
    .shop4{
            width: 100%;
    height: 9.5rem;
    bottom: 0;
    left: 0;
    z-index: 3;
        position: absolute;
    img{
            max-width: 100%;
    max-height: 9.5rem;
    width: 32rem;
    }
    }
}
sbswiper{
    height:300rem;
}
</style>
