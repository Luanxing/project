<template>
    <div>
        <h2 >即将上映 (60部)</h2>
        <span @click="findclick">></span>
        <img  class='zhinan' src="@/assets/114632.81673221_o.jpg" >
        <h2>今日热点</h2>
        <ul>
            <li v-for='data in hotlist' :key="data.id" @click='handleclick(data.id)' >
                <img :src="data.img"/>
                <h3>{{data.title}}</h3>
                <p>{{data.desc}}</p>
                <!-- <p :class="p1">{{data.publishTime}}</p> -->

            </li>

        </ul>

    </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      hotlist: {}
    }
  },
  mounted () {
    axios.get('/Service/callback.mi/PageSubArea/GetFirstPageAdvAndNews.api?t=201961219174787242').then(res => {
      this.hotlist = res.data.hotPoints
    })
  },
  methods: {
    handleclick (id) {
      this.$router.push(`/hotdetail/${id}`)
    },
    findclick () {
      this.$router.push('/finddetail')
    }
  }

}
</script>

<style lang="scss" scoped>
    .zhinan{
        width: 30.52rem;
        height: 18.7rem;
    }
    h2{
        float: left;
    }
    span{
        font-size: 3rem;
        position: relative;
        left: 18rem;
        top:-1rem;
    }
    li{
        width: 100%;
        height: 8rem;
        margin-top: 4rem;
        margin-left: 2rem;
         img{
           width: 13rem;
           height: 9rem;
        }
        h3{
            float: right;
            margin-right: 4rem;
        }
        p{
             float: left;
             margin-top: -7rem;
             margin-left: 14rem;
        }

    }

</style>
