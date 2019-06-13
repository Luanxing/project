<template>
    <div>
        <h2>即将上映 (60部)</h2>
        <img  class='zhinan' src="@/assets/114632.81673221_o.jpg" >
        <h2>今日热点</h2>
        <ul>
            <li v-for='data in hotlist' :key="data.id" >
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
    data() {
        return {
            hotlist:{}
        }
    },
     mounted() {
        axios.get('/Service/callback.mi/PageSubArea/GetFirstPageAdvAndNews.api?t=201961219174787242').then(res=>{
            this.hotlist=res.data.hotPoints
        })
    },
    
 
    
}
</script>

<style lang="scss" scoped>
    .zhinan{
        width: 32.52rem;
        height: 18.7rem;  
    }
    li{
        width: 100%;
        height: 8rem;
        margin-top: 4rem;
        margin-left: 2rem;
         img{
           width: 13rem;
           height: 9rem; 
        //    float: left;
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
        // .p1{
        //     float: right;
        //      margin-top: -20rem;
        //      margin-left: 14rem;
        // }
        
    }
   
// }
</style>
