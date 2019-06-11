<template>
    <div>
         <div class="swiper-container a">
             <div class="swiper-wrapper">
                 <slot></slot>
             </div>
             <!-- 如果需要分页器 -->
             <div class="swiper-pagination"></div>
             <!-- 如果需要导航按钮 -->
             <div class="swiper-button-prev"></div>
             <div class="swiper-button-next"></div>
             <!-- 如果需要滚动条 -->
             <div class="swiper-scrollbar"></div>
         </div>
    </div>

</template>
<script>
import Swiper from 'swiper' // js模块
import 'swiper/dist/css/swiper.css' // css模块
export default {
  mounted () {
    /* eslint-disable no-new */
    new Swiper('.a', {
      loop: true,
      pagination: {
        el: '.swiper-pagination'
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      }
    })
  }
}
</script>
<style lang="scss" scoped>

    .swiper-container{
        .swiper-wrapper{
          img{
            width:100%;
          }
        }
        .swiper-pagination{
          padding-right: 12px;
          text-align: right;
          .swiper-pagination-bullet{
            background: red;
          }
          .swiper-pagination-bullet-active{
            background: #fff;
          }
        }

    };

</style>
