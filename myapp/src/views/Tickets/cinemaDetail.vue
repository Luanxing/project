<template>
   <div>
      <router-link to="/cinemaDetail">{{ddd}}</router-link> 
   </div>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'

export default {
    data () {
        return{
            datalist: {},
        }
    },
    mounted(){
        axios.get('/api/proxy/ticket/onlineCinemasByCity.api?locationId=729&_=1560340914901').then(res=>{
            console.log(res.data.data.cinemaList)
            this.datalist = res.data.data.cinemaList
        })
    }
}
</script>
