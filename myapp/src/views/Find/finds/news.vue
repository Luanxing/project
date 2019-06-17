<template>
<div>
		<div class="a0">
			<img :src="datalist.imageUrl" class="ig"/>
			<p class="t0">{{datalist.title}}</p>
			</div>
		<ul>
			<li v-for="(data,key) in datalist2" @click="handleChangePage(data.id)" :key=key >
				<div v-if="data.images.length===3" class="t2">
				<dl>
				<dt>{{data.title}}</dt>
				<dd>
				<div class="t21">
				<p class="ig2"><img :src="data.images[0].url1" class="ig21" ></p>
				<p class="ig2"><img :src="data.images[1].url1" class="ig21"></p>
				<p class="ig2"><img :src="data.images[2].url1" class="ig21"></p>
				</div>
				</dd>
				</dl>
				</div>
				<div v-else class="t1">
				<div class="t11">
					<i v-if="data.type===2" class="i_video"></i>
					<img :src="data.image" class="ig3">
				</div>
				<div class="t12">
					<dl>
						<dt>{{data.title}}</dt>
					</dl>
				</div>
				</div>

			</li>
		</ul>

</div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      datalist: {},
      datalist2: {}
    }
  },

  mounted () {
    axios.get('/Service/callback.mi/PageSubArea/GetRecommendationIndexInfo.api?t=20196138133374704')
      .then(res => {
        console.log(res.data)
        this.datalist = res.data.news
      }),
    axios.get('/Service/callback.mi/News/NewsList.api?t=20196138133393897&pageIndex=1')
      .then(res => {
        console.log(res.data.newsList)
        this.datalist2 = res.data.newsList
      })
  },
		 methods: {
    handleChangePage (id) {
      this.$router.push(`/find_newsdetail/${id}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.ig{
	width:100%;
}
.a0{
	position: relative;
    height: 18em;
    overflow: hidden;
}
.t0{
	background: rgba(0,0,0,0.5);
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 1.2em 0 1.2em;
    text-align: center;
	font-size:1.6rem;
	color: #fff;
	font-weight: bold;
}
ul{
	padding: 0 0 0 1.5em;
	overflow:hidden;
	li{
		border-bottom: 1px solid #ddd;
    	padding: 1.5em 0 1.35em;
    	cursor: pointer;
    	position: relative;
		width: 100%;
		.t1{
			overflow:hidden;
			.t11{
				width: 7.5em;
				display: block;
   				position: relative;
				margin-right:1.5em;
				float: left;
				.i_video{
					position: absolute;
    				bottom: .5em;
    				right: .5em;
    				width: 2.9em;
    				height: 2.9em;
					overflow: hidden;
    				display: inline-block;
    				background: url(https://static1.mtime.cn/html5/20190531185056/images/2014/viceoplay.png) no-repeat center center;
    				background-size: cover;
				}
				.ig3{
					width: 100%;
    				height: 7em;
    				display: block;
					border: 1px solid #ddd;
				}
			}
			.t12{
				padding: 0 1.5em;
				dl{
					margin-top: -0.2em;
    				position: relative;
    				height: 8em;
					dt{
						font-size: 1.5em;
    					line-height: 1.3;
    					font-weight: bold;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
					}
				}
			}
		}
	.t2{
		padding-left: 0;
    	overflow: hidden;
		dt{
			font-size: 1.5em;
    		line-height: 1.3;
    		font-weight: bold;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
		dd{
			color: #777;
    		padding: .5em 0 .2em;
			.t21{
				padding: .5em 0 0;
				width: 100%;
				.ig2{
			    	display: block;
    				width: 8.5em;
   			 		height: 6.5em;
    				margin: auto;
    				overflow: hidden;
					margin-left: 0;
					font-size: 100%;
					float: left;
					.ig21{
						width: 100%;
    					height: auto;
    					display: block;
						}
					}
				}
			}
		}
	}
}

</style>
