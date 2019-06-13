<template>
   <nav>
     <ul>
       <li><a href="#"><i class="logo"></i></a></li>
       <router-link to="/main" tag="li" activeClass="active"><span>首页</span></router-link>
       <router-link to="/tickets" tag="li" activeClass="active"><span>购票</span></router-link>
       <router-link to="/shopping" tag="li" activeClass="active"><span>商城</span><em class="new">NEW</em></router-link>
        <router-link to="/find" tag="li" activeClass="active"><span>发现</span></router-link>
        <li><a href="#"><i class="ico_my"></i></a></li>
     </ul>
   </nav>
</template>
<script>
export default {
  mounted () {

  }
}
</script>
<style lang="scss" scoped>
        *{margin:0;padding:0;};
        .active{
            color: #fff;
        };
        .active :after {
          content: '';
          display: block;
          height: .2rem;
          background: #fff;
          width: 2.6rem;
          overflow: hidden;
          position: absolute;
          bottom: 0;
          left: 50%;
          margin-left:-1.3rem;
        }
        nav{
          width:100%;
          height:4.4rem;
          line-height: 4.4rem;
          background: #1c2635;
          color:#bbb;
          font-size: 1.3rem;
          ul{
          display:flex;
          li:first-of-type{
            padding:0 1.2rem;
          }
          li{
            text-align: center;
            flex:1;
            position: relative;
            .new{
                  font-style: normal;
                  background: -webkit-linear-gradient(top,#ef4545,#d80808);
                  width: 2.5rem;
                  height: 1.2rem;
                  border-radius: 1rem;
                  overflow: hidden;
                  color: #fff;
                  font-size: .8rem;
                  line-height: 1.1rem;
                  position: absolute;
                  top: .7rem;
                  left: 3.6rem;
            }
            a{
              color: #bbb;
              display: inline-block;
              height: 4.4rem;
              line-height: 4.4rem;
              position: relative;
            .logo{
              width:5.6rem;
              height:1.8rem;
              background: url(../assets/mtime.png) no-repeat;;
              background-size: contain;
              display: inline-block;
              vertical-align: middle;
            }
            .ico_my{
              width: 1.4rem;
              height: 1.8rem;
              display: inline-block;
              vertical-align: middle;
              background: url(../assets/ico_my.png) no-repeat;
              background-size: cover;
            }
            }
          }
        }
        }
</style>
