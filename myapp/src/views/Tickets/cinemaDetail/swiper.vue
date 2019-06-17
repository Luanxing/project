<template>
    <div class="swiper-container zs">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'

export default {

  mounted () {
    new Swiper('.zs', {
      slidesPerView: 2.5,
      spaceBetween: 100,
	  centeredSlides: true
    })
  }
}
</script>

<style lang="scss">

</style>
