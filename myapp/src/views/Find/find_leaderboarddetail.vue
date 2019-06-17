<template>
<div>
    <div class="filmpeople">
        <header class="peopletitle">
            <h2>{{datalist2.name}}</h2>
            </header>
            <p>{{datalist2.summary}}</p>
            </div>
    <ul>
        <li v-for="(data,key) in datalist" :key=key>
            <p class="a0"><span>{{data.rankNum}}</span></p>
            <div class="a1">
                <div class="a11">
                    <img :src="data.posterUrl" class="ig">
                </div>
                <dl class="a12">
                    <dt>
                        <strong>{{data.name}}{{data.decade}}</strong>
                        <em class="m_score"><i>{{data.rating}}</i></em>
                    </dt>
                    <dd class="b1">
                        {{data.nameEn}}
                    </dd>
                    <dd class="b2">
                        <p>导演：{{data.director}}</p>
                        <p>主演：{{data.actor}}&nbsp;&nbsp;{{data.actor2}}</p>
                        <p>{{data.releaseDate}}  {{data.releaseLocation}}</p>
                    </dd>
                </dl>
            </div>
            <div class="a2">
                    <div class="a21">
                        <p>{{data.remark}}</p>
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
    axios.get(`/Service/callback.mi/TopList/TopListDetails.api?t=20196142194439157&pageIndex=1&type=2&toplistId=${this.$route.params.dfqid}&pageSubAreaID=92`)
      .then(res => {
        console.log(res.data.movies)
        this.datalist = res.data.movies
        this.datalist2 = res.data.topList
      })
    // ,
    // axios.get('/html5/20190531185056/css/2014/mobile.css')
    // .then(res=>{
    // 	console.log(res.data.newsList)
    // 	this.datalist2 = res.data
    // })
  }

}
</script>

<style lang="scss" scoped >
.filmpeople{
    background: #f6f6f6;
    border-bottom: 1px solid #dfdfdf;
    padding: 1.15em 1.5em 1.2em;
    .peopletitle{
      padding-bottom: .6em;
      h2{
        font-size: 1.8em;
        text-align: center;
        line-height: 1.4;
      }
    }
    p{
      font-size: 1.1em;
      color: #777;
      line-height: 1.6;
      position: relative;
      cursor: pointer;
    }
}
ul{
    padding: 1.5em 0 0;
    li{
        position: relative;
        .a0{
            position: absolute;
            left: .5em;
            top: 0;
            width: 2.3em;
            height: 2.3em;
            border-radius: 2.3em;
            span{
                display: block;
                color: #fff;
                font-size: 1.4em;
            }
        }
        .a1{
            width: 100%;
            display: -webkit-box;
            .a11{
                margin-left: 3.3em;
                margin-right: 1.5em;
                width: 7.3em;
                .ig{
                    width: 100%;
                    height: auto;
                    display: block;
                    border: 1px solid #ddd;
                }
            }
            .a12{
                margin-right: 1.5em;
                flex: 1;
                dt{
                  text-decoration: none;
                  strong{
                        vertical-align: middle;
                        font-size: 1.5em;
                        }
                    em{
                        background: #659d0e;
                        width: 2em;
                        height: 1.8em;
                        color: #fff;
                        display: inline-block;
                        vertical-align: middle;
                        overflow: hidden;
                        line-height: 1.8em;
                        text-align: center;
                        margin-left: .5em;
                        i{font-size: 1.1em;}
                        }
                    }
                .b1{
                    padding-top: .5em;
                    color: #bbb;
                    line-height: 1.2;
                    font-size: 1.2em;
                    }
                .b2{
                    margin-top: 1.6em;
                    text-decoration: none;
                    P{
                      overflow: hidden;
                      font-size: 1.2em;
                      line-height: 1.7;
                        }
                    }
                }
        }
        .a2{
            margin: 1.15em 1.5em 1.5em 3.3em;
            background: #f6f6f6;
            padding: .5em .6em;
            border-radius: .2em;
            .a21{
                display: -webkit-box;
                p{
                  line-height: 1.4em;
                  font-size: 1.2em;
                  color: #777;
                  -webkit-box-flex: 1;
                  overflow: hidden;
			      text-overflow: ellipsis;
			      white-space: nowrap;
                }
            }
        }
     }
}
</style>
