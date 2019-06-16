<template>
  <div class="malltype" v-if="this.$store.state.MarketFirstPageNewList">
    <div v-for="(data,key) in datalist" :key="key" class="malltypelist">
      <div class="title">
        <h2>
          <i></i>玩具模型
        </h2>
        <div class="gengduo">
          <span>更多</span>
        </div>
      </div>
      <dl>
        <dt>
          <img :src="data.image">
        </dt>
        <dd>
          <ul>
            <li v-for="(data) in data.subList" :key="data.goodsId">
              <img :src="data.image">
              <h3>{{data.title}}</h3>
              <!-- <h3 v-if="this.pricelist.length">{{data.goodsId|filterAdd1}}</h3> -->
              <p v-if="pricelist.length">¥<strong>{{
                  (pricelist.find((item,index)=>{
                      return item.id===data.goodsId
                  }).price)/100
                  }}</strong></p>
            </li>
          </ul>
        </dd>
      </dl>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      datalist: [],
      pricelist: []
    }
  },
  mounted () {
    this.datalist = this.$store.state.MarketFirstPageNewList.category
    axios({
      url: '/Service/callback.mi/ECommerce/GoodsPrices.api?t=20196132001574245&goodsIds=107091%2C107094%2C105242%2C107095%2C101829%2C104706%2C107061%2C107063%2C107179%2C107113%2C107145%2C107157%2C102831%2C102833%2C102841%2C102533%2C102732%2C102531%2C105695%2C105730%2C105724%2C105727%2C105728%2C105729%2C106277%2C106476%2C106469%2C106560%2C106475%2C106577%2C104366%2C101125%2C102841%2C108115%2C107167%2C107047%2C108084%2C107732%2C107060%2C108110%2C107741%2C107740',
      headers: {
        'X-Mtime-Wap-CheckValue': 'mtime'
      }
    }).then(
      res => {
        this.pricelist = res.data.result
        console.log(this.pricelist)
      }
    )
  },
  filters: {
    filterAdd1 (id, arr) {

    }
  }
}
</script>
<style lang="scss" scope>
.malltype {
  .malltypelist {
    margin-bottom: 1.2rem;
    padding-bottom: 1.28rem;
    background: white;
  }
  .title {
    padding-top: 1.7rem;
    width: 100%;
    display: -webkit-box;
    h2 {
      font-size: 1.5rem;
      line-height: 1rem;
      position: relative;
      font-weight: normal;
      color: #ffb90f;
      i {
        width: 0.6rem;
        height: 1.8rem;
        display: inline-block;
        position: relative;
        margin-right: 0.5rem;
        vertical-align: middle;
        overflow: hidden;
        background: #ffb90f;
      }
    }
    .gengduo {
      position: relative;
      zoom: 1;
      font-size: 1.3rem;
      color: #666;
      margin-right: 1.5rem;
      padding-right: 1.5rem;
      line-height: 1rem;
      margin-top: 0.2rem;
      text-align: right;
      flex: 1;
    }
  }
  dl {
    margin: 0 1.28rem;

    dt {
      border-bottom: 1px solid #d8d8d8;
      padding: 0.5rem 0;
      margin-bottom: 0.64rem;
      img {
        width: 100%;
        height: 100%;
        max-height: 15.5rem;
      }
    }
    dd {
      ul {
        width: 100%;
        display: -webkit-box;
        li {
          width: 33.3rem;
          text-align: center;
          flex: 1;
          img {
            width: 8.5rem;
            height: 8.5rem;
            margin: 0 auto;
          }
          h3 {
            padding: 0.64rem 0;
            font-size: 1.1rem;
            line-height: 1.2rem;
            font-weight: normal;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            margin: 0 0.5rem;

          }
            p{
                    font-size: 1.2rem;
    color: #f15353;
     strong{
                font-size: 1.5rem;
            }
            }
        }
      }
    }
  }
}
</style>
