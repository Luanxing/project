<template>
<div>
  <findheader></findheader>
  <router-view></router-view>
  </div>
</template>
<script>
import findheader from './finds/findheader'
export default {
	
	components: {
		findheader
	}
}
</script>
<style lang="scss" scoped>

</style>

