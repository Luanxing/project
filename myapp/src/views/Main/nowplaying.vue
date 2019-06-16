<template>
    <div>
        <h2>正在热映 (60部)</h2>
       <ul>
          <li v-for='data in filmlist' @click='handleclick(data.id)' :key="data.id">
              <img :src="data.img">
              <p>{{data.t}}</p>
          </li>
       </ul>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      filmlist: []
    }
  },
  methods: {
    handleclick (id) {
      this.$router.push(`/detail/${id}`)
    }
  },
  mounted () {
    axios.get('/Service/callback.mi/Showtime/LocationMovies.api?locationId=292&t=20196121847219062').then(res => {
      // console.log(res.data)
      this.filmlist = res.data.ms.slice(0, 8)
    })
  }

}
</script>

<style lang="scss" scoped>
ul{
    width: 32rem;
    height: 30rem;
    display: flex;
    flex-wrap: wrap;

    li{
        width: 7.9rem;
        height: 11.3rem;
        flex:1;
        padding-left: 0.5rem;
    }
    img{
        width: 7.5rem;
        height: 11.3rem;
    }
}
</style>
