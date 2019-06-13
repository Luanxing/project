<template>
    <div>
         <h2>剧照</h2>
        <ul>
           
            <li v-for="data in detaillist" :key="data">
                <img :src="data">
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            detaillist:[]
        }
    },
    mounted() {
        axios.get('/Service/callback.mi/movie/Detail.api?movieId=213190&locationId=290&t=201961221111876155').then(res=>{
            console.log(res.data.images)
            this.detaillist=res.data.images
        })
    },
 
}
</script>

<style lang="scss" scoped>
    ul{
        display: flex;
        li{
            flex:1;
        }

    }
    img{
        width: 7.7rem;
        height: 7.7rem;
    }
</style>
