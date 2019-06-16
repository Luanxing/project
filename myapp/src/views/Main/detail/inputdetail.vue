<template>
  <div>
      <div class="search">
        <i class="iconfont icon-search"></i>
        <input type="text" value="         影片/影人/影院,任你搜" v-model="mytext" @input="handleinput()">
        <button>搜索</button>
      </div>
    <ul>
      <li v-for="(data,key) in searchinglist" :key="key">{{data.titlecn}}</li>
    </ul>
    <ul class="hotsearch">
        <h2>热门搜索</h2>
        <li v-for='data in hotlist' :key='data.id'>{{data.toString()}}</li>
    </ul>
  </div>
</template>

<script>
import '@/assets/iconfont/iconfont.css'
import { HIDE_NAVBAR_MUTATION, SHOW_NAVBAR_MUTATION } from '@/type/index.js'
import axios from 'axios'
import { mapState } from 'vuex'
export default {
  data () {
    return {
      mytext: '',
      searchinglist: []
      //   historylist:[]

    }
  },

  mounted () {
    this.$store.commit(HIDE_NAVBAR_MUTATION, false)

    if (this.hotlist.length === 0) {
      this.$store.dispatch('getHotlistaction')
    } else {
      console.log('使用缓存数据')
    }
  },
  computed: {
    ...mapState(['hotlist'])
  },
  methods: {
    handleinput () {
      axios
        .get(
          `/Service/callback.mi/Search/SearchSuggestionNew.api?t=201961315435967897&keyword=${
            this.mytext
          }&locationId=292`
        )
        .then(res => {
          // console.log(res.data.suggestions)
          this.searchinglist = res.data.suggestions
          console.log(res.data)
        })
    }

  },

  destroyed () {
    this.$store.commit(SHOW_NAVBAR_MUTATION, true)
  }
}
</script>

<style lang='scss' scoped >
.search {
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

li {
  position: relative;
  left: 3rem;
  top: 2rem;
  width: 37rem;
  height: 3rem;
}
.hotsearch{
    width: 37rem;
    height: 11rem;
    h2{
        margin-top: 2rem;
        padding-left: 1rem;
        background: #dfdfdf;
        color: #ccc;
        width: 31rem;
        height: 3rem;
        line-height: 3rem;
    }
    li{
        // width: 3rem;
        // height: 3rem;
        font-size: 1rem;
        color: #1e7dd7;
        // border: 1px solid #ccc;
        // border: yellow 1px solid;
        // border-radius: 3%;
    }
}
</style>
