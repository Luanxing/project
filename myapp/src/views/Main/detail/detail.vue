<template>
  <div>
    <!-- <h2> {{detaillist.actors[0]}}</h2> -->
    <img :src="detaillist.image" class="img1">
    <button>
      <i class="iconfont icon-video"></i>
    </button>
    <h2>{{detaillist.titleCn}}</h2>

    <p>详情简介：</p>
    <p>{{detaillist.content}}</p>
    <!-- <div class="div1">
      <p class="p1">导演{{detaillist.director.directorName}}</p>
      <img :src="detaillist.director.directorImg" class="img2">
    </div>
    <div class="div2">
      <p class="p2">演员{{detaillist.actors[0]}}</p>
      <img :src="detaillist.actorList[0].actorImg" class="img3">
    </div>
    <div class="div3">
      <p class="p3">{{detaillist.actors[1]}}</p>
      <img :src="detaillist.actorList[1].actorImg" class="img4">
    </div> -->

    <h2 class="h2">剧照</h2>
    <ul>
      <li>
        <img :src="detaillist.images[0]">
      </li>
      <li>
        <img :src="detaillist.images[1]">
      </li>
      <li>
        <img :src="detaillist.images[2]">
      </li>
      <li>
        <img :src="detaillist.images[3]">
      </li>
    </ul>
  </div>
</template>

<script>
import "@/assets/iconfont/iconfont.css";
import axios from "axios";
export default {
  data() {
    return {
      // detaillist:[]
      detaillist: {}
    };
  },
  mounted() {
    axios
      .get(
        `/Service/callback.mi/movie/Detail.api?movieId=${
          this.$route.params.id
        }&locationId=290&t=20196138591130644`
      )
      .then(res => {
        console.log(res.data);
        // this.detaillist=res.data.images
        this.detaillist = res.data;
      });
  }
};
</script>

<style lang="scss" scoped>
ul {
  display: flex;
  li {
    flex: 1;
  }
}
.img1 {
  width: 12.3rem;
  height: 18.5rem;
  float: left;
}
button {
  position: relative;
  left: -8rem;
  top: 7rem;
  i {
    font-size: 3rem;
  }
}
.p1 {
  position: relative;
  top: 1rem;
  left: -12rem;
}
.p2 {
  position: relative;
  top: 20rem;
  left: -12rem;
}
.img2,
.img3,
.img4 {
  width: 10rem;
  height: 10rem;
  float: left;
}
.img2{
  position: relative;
  left: -12rem;
  top: 2rem;
}
// .img3{
//   position: relative;
//   left: -12rem;
//   top: 10rem;
// }
.h2{
    position: relative;
    left: -12rem;
    top:1rem;
}
.div1,.div2,.div3{
    float: left;
}
ul{
    position: relative;
    left: 0rem;
    top:1rem;
    display: flex;
    li{
        flex: 1;
        img{
            width: 7rem;
            height: 7rem;
        }
    }
}
</style>
