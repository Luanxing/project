<template>
<div>
	<div class="a0">
		<div class="ig0"><img :src="datalist.posterUrl" class="ig"/></div>
		<h2 class="t0">
            <p class="t01">{{datalist.movieName}}</p>
            <p class="t02">{{datalist.title}}</p>
        </h2>
	</div>
    <div class="a1">
        <ul>
            <li v-for="(data,key) in datalist2" @click="handleChangePage(data.id)" :key=key>
                <dl>
                  <dt>{{data.title}}</dt>  
                </dl>
                <div class="t1">
                   <div class="t11">
                       <img :src="data.userImage" class="ig1">
                   </div>
                   <div class="t12">
                       {{data.nickname}}-评分<span>《{{data.relatedObj.title}}》<em v-show="data.rating!==null"><i>{{data.rating}}</i></em></span>
                   </div>
                   
                </div>
            </li>
        </ul>
    </div>
</div>
</template>

<script>
import axios from "axios";
export default {
    data () {
			return {
			datalist: {},
			datalist2: {} 
			}
		},

		mounted () {
			axios.get('/Service/callback.mi/PageSubArea/GetRecommendationIndexInfo.api?t=201961312165819626')
			.then(res=>{
				console.log(res.data)
				this.datalist = res.data.review
			}),
			axios.get('/Service/callback.mi/MobileMovie/Review.api?needTop=false&t=201961313332019387')
			.then(res=>{
				console.log(res.data)
				this.datalist2 = res.data
			})
        },
        methods: {
    handleChangePage (id) {
      this.$router.push(`/find_reviewdetail/${id}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.a0{
	position: relative;
    height: 18em;
    overflow: hidden;
    .ig0{
        width: 6.3em;
        height: 9.5em;
        position: absolute;
        left: 1.5em;
        bottom: 1em;
        z-index: 2;
        .ig{
            width: 100%;
            height: auto;
		    display: block;
            border: 1px solid #fff;
		    }
    }
		.t0{
			background: rgba(0,0,0,0.5);
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            // text-align: left;
            padding: 0.8em 0 0.7em 7em;
            .t01{
                font-size: 1.4em;
                color: #fff;
            }
            .t02{
                font-size: 1em;
                color: #ddd;
                font-weight: normal;
            }
		}	
    }
.a1{
    ul{
        padding: 1.5em;
        li{
            border-bottom: 1px solid #d8d8d8;
            padding: 1.5em 1.5em 1.25em 1.3em;
            margin-right: -1.5em;
            dl{
                margin: 0;
                line-height: 1;
                dt{
                    padding-bottom: .7em;
                    font-weight: bold;
                    font-size: 1.6em;
                }
            }
            .t1{
                padding: 0;
                overflow: hidden;
                .t11{
                    width: 2.1em;
                    height: 2.1em;
                    margin-right: .5em;
                    float: left;
                    .ig1{
                        width: 100%;
                        height: auto;
                        display: block;
                    }
                }
                .t12{
                    color: #777;
                    line-height: 1.6;
                    font-size: 1.3em;
                    font-weight: normal;
                    display: inline-block;
                    vertical-align: middle;
                    float: left;
                    span{
                        color: #333;
                        font-weight: bold;
                        em{
                            background: #659d0e;
                            width: 2em;
                            height: 1.8em;
                            color: #fff;
                            overflow: hidden;
                            line-height: 1.8em;
                            text-align: center;    
                        }
                    }
                }
            }
        }
    }
    }   


</style>
