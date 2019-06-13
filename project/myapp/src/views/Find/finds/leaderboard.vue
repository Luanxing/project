<template>
<div>
	<div class="a0">
		<div class="ig0"><img :src="datalist.imageUrl" class="ig"/></div>
		<h2 class="t0">{{datalist.title}}</h2>
	</div>
     <ul class="a1">
            <li class="t1">
                <i class="top01"></i>
                <p><span>时光Top100</span></p>
            </li>
            <li class="t2">
                <i class="top02"></i>
                <p><span>华语Top100</span></p>
            </li>
            <li class="t3">
                <i class="top03"></i>
                <p><span>全球票房榜</span></p>
            </li>
        </ul>
    <ul class="a2">
        <li v-for="(data,key) in datalist2" :key=key>
        <div class="m1">
            <h2>{{data.topListNameCn}}</h2>
            <p>{{data.summary}}</p>
        </div>
        <i class="i_tnext"></i>
        </li>
    </ul>
        
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
				this.datalist = res.data.topList
			}),
			axios.get('/Service/callback.mi/TopList/TopListOfAll.api?t=201961314255479725&pageIndex=1')
			.then(res=>{
				console.log(res.data.topLists)
				this.datalist2 = res.data.topLists
			})
		}
}
</script>

<style lang="scss" scoped>
.a0{
	position: relative;
    height: 18em;
    overflow: hidden;
    .ig0{
        .ig{
            width: 100%;
            height: auto;
            display: block;
        }
    }
    .t0{
         background: rgba(0,0,0,0.5);
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        padding: 1.2em 0 1.2em;
        text-align: center;
        color: #fff;
        font-size: 1.6em;
        display: block;

    }
}
.a1{
    padding: 2.5em 0 0;
    text-align: center;
        display: flex;
            .t1{
                flex: 1;
                .top01 {
                background: url(https://static1.mtime.cn/html5/20190531185056/images/2014/top01.png) no-repeat;
                background-size: cover;
                display: block;
                width: 4.9rem;
                height: 4.9rem;
                border-radius: 4.9rem;
                margin: auto;
                text-align: center;
                }
                p{
                    padding: 1.4em 0 0;
                    color: #1498c9;
                }
            }
             .t2{
                flex: 1;
                .top02 {
                background: url(https://static1.mtime.cn/html5/20190531185056/images/2014/top02.png) no-repeat;
                background-size: cover;
                display: block;
                width: 4.9rem;
                height: 4.9rem;
                border-radius: 4.9rem;
                margin: auto;
                text-align: center;
                }
                p{
                    padding: 1.4em 0 0;
                    color: #3bc7c2;
                }
            }
             .t3{
                flex: 1;
                .top03 {
                background: url(https://static1.mtime.cn/html5/20190531185056/images/2014/top03.png) no-repeat;
                background-size: cover;
                display: block;
                width: 4.9rem;
                height: 4.9rem;
                border-radius: 4.9rem;
                margin: auto;
                text-align: center;
                }
                p{
                    padding: 1.4em 0 0;
                    color: #ffc12d
                }
            }
        }
.a2{
    border-top: 1px solid #d8d8d8;
    margin-top: 2.1em;
    li{
        padding: 0 0 0 1.5em;
        position: relative;
        .m1{
            display: block;
            text-align: left;
            padding: 1.7em 0;
            border-bottom: 1px solid #f1c8c8;
            h2{
                line-height: 1.4;
                font-size: 1.5em;
            }
            p{
                margin-top: .65em;
                padding: 0 3em 0 0;
                height: 1.6em;
                font-size: 1.3em;
                color: #777;
                overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
            }
        }
        .i_tnext{
                right: 1em;
                width: 1.4rem;
                height: .8rem;
                position: absolute;
                top: 50%;
                margin-top: -0.4rem;
                overflow: hidden;
                line-height: 11rem;
                text-indent: -999px;
                transform: rotate(-90deg);
                display: block;
                background: #fff url(https://static1.mtime.cn/html5/20190531185056/images/2014/i-tmore.png) no-repeat center center;
                background-size: auto .8rem;
        }
    }
}

</style>