<template>
    <div class="box">
        <div class="childbox">
            <div class="address">
                <b>大连 v</b><i class="#"></i>
            </div>
            <input type="text" class="searchbox" placeholder="筛选影院" value="">
            <a class="update" style="display: none;"></a>
            <a class="search"><span>搜索</span></a>
        </div>
        <div class="">
            <ul class="menu">
                <li class="first" @click="changeStatus()">离我最近</li>
                <div class="hidebox" v-if="show">
                    <ul>
                        <li>离我最近</li>
                        <li>价格最低</li>
                    </ul>
                </div>
                <li class="second1">全城</li>
                <li  class="second" @click="changeStatus()" >影厅特效</li>
                <!-- <div class="hidebox2" v-if="show">
                    <ul>
                        <li>3D</li>
                        <li>4D</li>
                        <li>IMAX</li>
                        <li>情侣</li>
                        <li>巨幕</li>
                        <li>VIP</li>
                    </ul>
                </div> -->
            </ul>
        </div>
        <div class="line" style="line-height: 1.8rem; background: rgb(246, 246, 246); font-size: 0.8rem; color: rgb(153, 153, 153); text-align: center;">以下影院均非时光网自营</div>
        <ul>
            <li @click="handleClick(data.cinemaId)" to="/cinemaDetail" tag="li" class="list" v-for="(data,key) in datalist " :key=key>

                <dl>
                    <dt>
                        <p class="name">{{data.cinameName}}</p>
                        <p class="minibox">
                            <b v-show="data.minPrice>0" class="price">{{data.minPrice/100}}</b>
                            <span v-show="data.minPrice>0" class="yuan">元起</span>
                        </p>
                    </dt>
                    <dd>
                        <p class="address">{{data.address}}</p>
                    </dd>
                    <dd class="featurebox">
                        <p v-show="data.feature.has3D === 1" class="feature">3D</p>
                        <p v-show="data.feature.hasVIP === 1" class="feature">VIP</p>
                        <p v-show="data.feature.hasIMAX === 1" class="feature">IMAX</p>
                        <p v-show="data.feature.hasFeature4D=== 1" class="feature">4D</p>
                        <p v-show="data.feature.hasFeatureDolby === 1" class="feature">杜比</p>
                    </dd>
                </dl>
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
      show: false
    }
  },
  mounted () {
    axios.get('/api/proxy/ticket/onlineCinemasByCity.api?locationId=729&_=1560340914901').then(res => {
      console.log(res.data.data.cinemaList)
      this.datalist = res.data.data.cinemaList
    })
  },
  methods: {
    handleClick (id) {
      this.$router.push(`/cinemaDetail/${id}`)
    },
    changeStatus () {
			      this.show = !this.show
    }

  }

}

</script>

<style lang="scss" scoped>
    .featurebox{
    display: block;
    margin-left: .5rem;
    .feature{
    display: inline-block;
    position: relative;
    vertical-align: middle;
    zoom: 1;
    height: .875rem;
    text-align: center;
    margin-right: .3125rem;
    padding: .1625rem;
    margin-bottom: .43rem;
    vertical-align: baseline;
    font-size: .5625rem;
    line-height: .875rem;
    color: #6d8297;
    border: 1px solid #6d8297;

    }
    }

    .list{
    border-bottom: 1px solid #d8d8d8;
    }

    .name{
    display: inline-block;
    position: relative;
    vertical-align: middle;
    zoom: 1;
    font-size: 1.4rem;
    line-height: 1.40625rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: .5rem;

    }
    .minibox{
    float: right;
    display: inline-block;
    position: relative;
    vertical-align: middle;
    padding-right: 1rem;
    padding-top: 1.2rem;
    zoom: 1;
    .price{
    font-size: 1.4rem;
    line-height: 1.34375rem;
    font-style: normal;
    font-weight: 400;
    color: #ff8600;

    }
    .yuan{

        font-size: 1.2rem;
        color: #ff8600;
    }
    }
    .address{
    color: #777;
    padding-left: .5rem;
    font-size: 1.15rem;
    line-height: 1.15625rem;
    font-weight: 400;
    margin-bottom:1.2rem;
    }

    .childbox{
            font-size: 14px;
            border-bottom: 1px solid #d8d8d8;
            position: relative;
            padding: .7625rem 1.09375rem .546875rem;
            height: 100%;
            background: #f6f6f6;
            text-align: center;
            display: flex;
        .address{
            font-size: 2.9375rem;
            margin-right: 1.09375rem;
            height: 2.5625rem;
            line-height: 2.5625rem;
            flex:1;
            b{
            display: inline-block;
            position: relative;
            vertical-align: middle;
            zoom: 1;
            font-size: 1.3375rem;
            font-weight: 400;
            }
        }
        .searchbox{
            box-sizing: border-box;
            flex: 1;
            display: block;
            font-size: 1.2rem;
            width: 7.3875rem;
            height: 2.8rem;
            padding-top: .1975rem;
            margin-left: 1.4625rem;
            margin-top: .18rem;
            padding-right: 2.65625rem;
            padding-left: 2.1875rem;
            border: 1px solid #bbb;
            border-radius: .5em;
            // background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAAGXRFW…9r7L1t8OL2LLk8JDpZxv6YbOk28Av8Bfc8GfX/SCbYfwEGAOXhtFDed5rtAAAAAElFTkSuQmCC) .5em no-repeat transparent;
            background-color: #fff;
            background-size: 1.3em 1.3em;
            position: relative;
            z-index: 0;
        }
        .search{
            // font-size: 14px;
            box-sizing: border-box;
            color: #333;
            width: 4.5rem;
            text-align: right;
            height: 2.4em;
            line-height: 2.4em;
            text-align: center;
            border: 1px solid #fff;
            border-radius: 5px;
            margin-left: .5rem;
            display: block;
            flex: 1;
            cursor: pointer;
            margin-top: .18rem;
        }
    }
    .menu{
        display: flex;
        border-bottom: 1px solid #d8d8d8;
        li{
            font-size: .8125rem;
            line-height: 1.15625rem;
            flex: 1;
            text-align: center;
            color: #777;
            display: block;
            padding-top: .9875rem;
            padding-bottom: .9875rem;
        }
        .first{
            border-right:2px solid #bbb;
        }
        .second1{
            border-right:2px solid #bbb;
        }
        .hidebox{
            width: 100%;
            height:8rem;
            background: rgb(236, 231, 231);
            z-index: 2;
            position: absolute;
            top:12.8rem;
        }
        // .hidebox2{
        //     width: 100%;
        //     height:8rem;
        //     background: rgb(236, 231, 231);
        //     z-index: 2;
        //     position: absolute;
        //     top:12.8rem;
        // }
    }
    .line{
        line-height: 1.8rem;
        background: rgb(246, 246, 246);
        font-size: 0.8rem;
        color: rgb(153, 153, 153);
        text-align: center;
        padding-top: 0.25rem;
        padding-bottom: 0.25rem;

    }
</style>
