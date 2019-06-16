<template>
  <div>
    <h2>即将上映 (58部)</h2>
    <p>6月</p>
    <ul>
      <li v-for="data in datalist.moviecomings" :key="data.id">
        <p class="p1">{{data.rDay}}日</p>
        <img :src="data.image">
        <p class="p2">{{data.title}}</p>
        <p class="p3">{{data.wantedCount}}人想看   --<span>{{data.type}}</span></p>
        <p class="p4" v-show="data.director">导演：{{data.director}}</p>
        <p class="p5" v-show="data.isTicket">
          <a href="#">超前预售</a>
        </p>
        <p class="p6" v-show="data.isVideo">
            <span>预告片</span>
        </p>
      </li>
    </ul>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      datalist: []
    }
  },
  mounted () {
    axios
      .get(
        '/Service/callback.mi/Movie/MovieComingNew.api?locationId=292&t=201961320204596653'
      )
      .then(res => {
        console.log(res.data.moviecomings)
        this.datalist = res.data
      })
  }
}
</script>

<style lang="scss" scoped>
ul {
  .p1 {
    float: left;
    color: #ccc;
  }
  .p2 {
    position: relative;
    left: 12rem;
    top: -11rem;
    font-size: 1.5em;
    vertical-align: middle;
  }
  .p3 {
    color: #ff8600;
    position: relative;
    left: 12rem;
    top: -10rem;
  }
  .p4 {
    position: relative;
    left: 12rem;
    top: -9rem;
  }
  .p5 {
    a {
      font-size: 1.4em;
      height: 100%;
      display: block;
      text-decoration: none;
      position: relative;
      left: 12rem;
      top: -8rem;
      width: 9.4rem;
      height: 2rem;
      background: #ff8600;
      border-radius:40%;
      text-align: center;
      color: #000;

    }
  }
  img {
    width: 7.6rem;
    height: 11rem;
    // float: left;
  }
}
</style>
