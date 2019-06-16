<template>
    <div class="main" v-if="$store.state.MarketFirstPageNewList">
      <div class="swiper-container gallery-thumbs">
    <div class="swiper-wrapper">
           <div  v-for=" (data,key) in $store.state.MarketFirstPageNewList.topic" :key="key" class="swiper-slide"><img :src="data.checkedImage" alt=""><div class="mark"></div></div>

    </div>
  </div>
        <div class="swiper-container gallery-top">
    <div class="swiper-wrapper">
      <div  v-for=" (data,key) in $store.state.MarketFirstPageNewList.topic" :key="key" class="swiper-slide content">
        <img :src="data.backgroupImage" alt="">
        <h2>{{data.titleEn}}</h2>
        <h3>{{data.titleCn}}</h3>
        <ul>
          <li v-for="(data,key) in data.subList" :key=key>
            <img :src="data.image" alt="">
            <p>{{data.title}}</p>
          </li>
        </ul>
        </div>
    </div>

  </div>

    </div>
</template>

<script>
import Swiper from 'swiper' // js模块
import 'swiper/dist/css/swiper.css' // css模块
export default {
  mounted () {
    var galleryThumbs = new Swiper('.gallery-thumbs', {

      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true
    })
    var galleryTop = new Swiper('.gallery-top', {
      effect: 'cube',
      spaceBetween: 10,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      thumbs: {
        swiper: galleryThumbs
      }

    })
  }
}
</script>
<style lang="scss" scoped>
  .main{
    position: relative;
  }
 html, body {
      position: relative;
      height: 100%;
    }
    body {
      background: #000;
      font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
      font-size: 14px;
      color:#000;
      margin: 0;
      padding: 0;
    }
    .swiper-container {
      width: 100%;
      margin-left: auto;
      margin-right: auto;
    }

    .gallery-top {
      width: 100%;
      img{
        height: 12.7rem;
    width: 100%;
      }
    }
    .gallery-thumbs {
      box-sizing: border-box;
      position: absolute;
      top:80px;
      z-index: 999;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .gallery-thumbs .swiper-slide {
      width: 25%;
      height: 100%;

    }

    .gallery-thumbs .swiper-slide-thumb-active {
      .mark{
        display:none;
      }
      opacity: 1;
    }
   .mark{
         position: absolute;
    top: 11px;
    left: 0;
    opacity: .3;
     height: 96px;
     width:96px;
    border-radius: 50%;

   }
   .content{
     h2{
       margin-top:20px;
     }
     h2,h3{
       text-align: center;
     }
     ul{
       overflow: hidden;
       li{
         width: 33.3%;
    height: 12.8rem;
    float: left;
    text-align: center;
    overflow: hidden;
    img{
      width: 8.5rem;
    height: 8.5rem;
    margin: 0 auto;
    }
       }
     }
   }

</style>
