<template>
  <div>
    <div class="movie_search">
      <div class="cityshow">
        <b>上海</b>
        <i class="iconfont icon-moreunfold"></i>
      </div>
      <i class="iconfont icon-search"></i>
      <input :type="text" @click="handleclick()" value="         影片/影人/影院,任你搜">
    </div>
    <Nowplaying></Nowplaying>
    <Comingsoon></Comingsoon>

  </div>
</template>

<script>
import Nowplaying from '@/views/Main/nowplaying'
import Comingsoon from '@/views/Main/comingsoon'
import "@/assets/iconfont/iconfont.css";
export default {
  methods: {
    handleclick() {
      this.$router.push("/inputdetail");
    }
  },
  components:{
      Nowplaying,
      Comingsoon
  }
};
</script>

<style >
.movie_search {
  width: 100%;
  height: 6.12rem;
  background: #f6f6f6;
  display: flex;
}

input {
  width: 26rem;
  height: 3.5rem;
  margin-left: 2rem;
  margin-top: 1rem;
  border-radius: 7%;
  border: #000;
  color: #ccc;
}
.cityshow {
  font-size: 1.8rem;
  color: #000;
  margin-top: 1.6rem;
  /* margin-left: 2rem; */
}
.icon-moreunfold {
  position: relative;
  left:4rem;
  top: -2rem;
}
.icon-search {
  position: relative;
  left: 4rem;
  top: 1.9rem;
}
</style>

