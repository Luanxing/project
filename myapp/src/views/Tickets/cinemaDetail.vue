<template>
  <div class="main">
    <div class="swiperbox">
    <swiper v-if="datalist">
      <div class="swiper-slide" v-for="(data,key) in datalist" :key="key">
         <img :src="data.img" alt class="poster">
        <h2>{{data.title}}</h2>
        <p>{{data.length}}{{' - '}}{{data.type}}</p>
      </div>
    </swiper>
    </div>
    <div class="showtime"> 
      <h2 class="lineblock">{{'今天'}}</h2>
      <ul v-for="(data,key) in datalist2" :key="key">
        <li v-if="data.startTime > 0" class="dis" v-for="data in data.list">
            <h2 class="times" v-show="data.startTime > 0">{{data.showDay | Hourfilter}}:{{data.showDay | Minutesfilter}}</h2>
            <p class="hall" v-show="data.startTime > 0">{{data.hall}}/{{data.language}}/{{data.versionDesc}}</p>
            <p class="prices" v-show="data.startTime > 0" >{{'¥' + data.price}}</p>
            <div class="buy" v-show="data.startTime > 0">{{'购票'}}</div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Vue from "vue";
import swiper from './cinemaDetail/swiper'
import '@/filter/filter.js'

export default {
  data() {
    return {
      datalist: null,
      datalist2:null
    };
  },
  mounted() {
    axios
      .get(
        `/cinema/showtime.api?t=201961319165843289&cinemaId=${
          this.$route.params.zsid
        }`
      )
      .then(res => {
        console.log(res.data.data);
        this.datalist = res.data.data.movies;
        this.datalist2 = res.data.data.showtimes;
      });
  },
  components:{
     swiper
  },
  methods:{

  }
};
</script>
<style lang="scss" scoped>
.main {

  .swiperbox{
    background: #ccc;
    height: 22rem;
    width: 100%;
    .swiper-slide{
      h2{
        width: 10rem;
      }
      margin-top: .5rem;
    }
  }
}
.poster {
  width: 9.5rem;
  display: block;
}
.lineblock{
  height:4rem;
  background:rgb(241, 239, 239);
  padding-left: 3rem;
  padding-top: .8rem;
  font-size: 2.2rem;
  color:blue;
  
 
}
.dis{
  .hall{
    font-size: 1.3rem
  }
  .times{
    font-size: 2.5rem
  }
  display: flex;
  justify-content:space-around;
  width: 100%;
  height: 4rem;
  padding-top: 1.3rem;
  border-bottom: 2px solid #ccc;

.prices{
  font-size: 2rem;
  color: #FF8600;
}
.buy{
  font-size: 1.5rem;
  width: 3.8rem;
  height: 2.3rem;
  border: 1px solid #FF8600;
  border-radius: 1rem;
  padding-left: .2rem;
  text-align: center;
  background:#FF8600;
  color:rgb(241, 239, 239)
}}
</style>
