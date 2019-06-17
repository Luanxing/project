<template>
<div>
	<div class="a0">
		<div class="ig0"><img :src="datalist.imageUrl" class="ig"/></div>
		<h2 class="t0">{{datalist.title}}</h2>
		<i class="i_video"></i>
	</div>
	<ul class="a1">
		<li v-for="(data,key) in datalist2" @click="handleChange()" :key=key>
			<eldialog :playerOptions.src="data.hightUrl" v-show="isShow">
			</eldialog>
			<div class="t1">
				<i class="i_video"></i>
				<img :src="data.coverImg" class="ig1"/>
			</div>
			<div class="t2">
				<dl>
					<dt>{{data.movieName}}</dt>
				</dl>
			</div>
		</li>
	</ul>
</div>
</template>

<script>
import axios from 'axios'
import eldialog from './vue-video-player'
export default {
  data () {
    return {
      datalist: {},
      datalist2: {},
      isShow: false
    }
  },

  mounted () {
    axios.get('/Service/callback.mi/PageSubArea/GetRecommendationIndexInfo.api?t=201961312165819626')
      .then(res => {
        console.log(res.data)
        this.datalist = res.data.trailer
      }),
    axios.get('/Service/callback.mi/PageSubArea/TrailerList.api?t=201961312165981201')
      .then(res => {
        console.log(res.data.trailers)
        this.datalist2 = res.data.trailers
      })
  },
  methods: {
    handleChange () {
      isShow: true
    }
  },
  components: {
    eldialog
  }
}
</script>

<style lang="scss" scoped>
.a0{
	position: relative;
    height: 18em;
    overflow: hidden;
		.ig{
		width: 100%;
    	height: auto;
		display: block;
    	vertical-align: top;
		}
		.t0{
			background: rgba(0,0,0,0.5);
    		position: absolute;
    		left: 0;
    		right: 0;
    		bottom: 0;
    		padding: 0.5em 1.8em;
    		text-align: center;
    		font-size: 2em;
			color: #fff;
		}
		.i_video{
			    position: absolute;
    			bottom: .8em;
    			right: 1em;
    			width: 3em;
    			height: 3em;
				overflow: hidden;
    			display: inline-block;
    			background: url(https://static1.mtime.cn/html5/20190531185056/images/2014/viceoplay.png) no-repeat center center;
    			background-size: cover;
		}
}
.a1{
	padding: 0 0 0 1.5em;
	li{
		border-bottom: 1px solid #ddd;
    	padding: 1.5em 0 1.35em;
    	cursor: pointer;
    	position: relative;
		overflow: hidden;
		.t1{
			width: 12.5em;
    		height: 7.5em;
			overflow: hidden;
			position: relative;
			float:left;
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
			.ig1{
				width: 100%;
    			height: auto;
    			display: block;
				border: 1px solid #ddd;
			}
		}
		.t2{
			padding: 0;
			float:left;
			width:14.5em;

			dl{
			 	padding: .3em 1.5em 0;
    			margin: 0;
				position: relative;
				width:14.5em;
				dt{
					font-size: 1.5em;
    				line-height: 1.5;
					font-weight: bold;

				}
			}
		}

	}
}

</style>
