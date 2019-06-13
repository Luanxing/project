<template>
  <div>
    <i class="iconfont icon-search"></i>
    <input type="text" value="         影片/影人/影院,任你搜" v-model="mytext" @input='handleinput()'>
    <button>搜索</button>
    <ul>
      <li v-for="(data,key) in searchinglist" :key="key">{{data.titlecn}}</li>
    </ul>
  </div>
</template>

<script>
import "@/assets/iconfont/iconfont.css";
import { HIDE_NAVBAR_MUTATION, SHOW_NAVBAR_MUTATION } from "@/type/index.js";
import axios from "axios";
export default {
  data() {
    return {
      mytext: "",
      searchinglist: [],
      list:[]
    
    };
  },

  mounted() {
    this.$store.commit(HIDE_NAVBAR_MUTATION, false);
  
  },
//   computed: {
//     computerProperty() {
//       //写的像方法，用的像属性，用datalist进行过滤，原数组不改变，并把过滤粗来的东西给了computerProperty
//       return this.searchinglist.filter(item => item.indexOf(this.mytext) > -1);
//     }
//   },
methods: {
    handleinput(){
        axios
      .get(`/Service/callback.mi/Search/SearchSuggestionNew.api?t=201961315141821208&keyword=${this.mytext}&locationId=292`)
      .then(res => {
        // console.log(res.data.suggestions)
        this.searchinglist = res.data.suggestions;
        console.log(res.data)
      });    
     }
},

  destroyed() {
    this.$store.commit(SHOW_NAVBAR_MUTATION, true);
  }
};
</script>

<style lang='scss' scoped >
div {
  width: 100%;
  height: 5.5rem;
  background: #1c2635;
}

input {
  width: 22rem;
  height: 3.5rem;
  margin-left: 2rem;
  margin-top: 1rem;
  border-radius: 7%;
  border: #000;
  color: #ccc;
  border: 1px #000 solid;
  margin-right: 1rem;
}

.icon-search {
  position: relative;
  left: 4rem;
  top: 0.3rem;
}
li{
    position: relative;
    left: 10rem;
    top:10rem;
}
</style>

