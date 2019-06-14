<template>
  <ul>
      <router-link to="/find/news" tag="li" activeClass="active"><span>新闻</span></router-link>
       <router-link to="/find/trailer" tag="li" activeClass="active"><span>预告片</span></router-link>
       <router-link to="/find/leaderboard" tag="li" activeClass="active"><span>排行榜</span></router-link>
        <router-link to="/find/filmreview" tag="li" activeClass="active"><span>影评</span></router-link>
  </ul>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
	ul{
		display: flex;
		height:4rem;
		li{
			flex: 1;
			line-height: 4rem;
			text-align: center;
			font-size: 1.4rem;
		}
	}
	.active{
		color:#1e7dd7;
	}
</style>

