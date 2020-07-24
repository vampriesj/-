<template>
  <div class="shop-info">
    <div class="shop-mes">
      <div class="shop-mes-img">
        <img :src="shop.logo">
      </div>
      <span class="name">{{shop.name}}</span>
    </div>
    <div class="shop-data">
      <div class="shop-num">
        <div class="shop-sells">
          <div>{{shop.sells|sellCountFilter}}</div>
          <div class="text">总销量</div>
        </div>
        <div class="shop-goods-count">
          <div>{{shop.goodsCount}}</div>
          <div class="text">全部宝贝</div>
        </div>
      </div>
      <div class="split"></div>
      <div class="shop-score">
        <table>
          <tr v-for="(item,index) in shop.score" :key="index">
            <td>{{item.name}}</td>
            <td :class="item.isBetter?'yellowColor':'redColor'">{{item.score}}</td>
            <td>
              <span :class="item.isBetter?'yellow':'red'">{{item.isBetter?'高':'低'}}</span>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="but"><a href="#">进店逛逛</a></div>
  </div>
</template>

<script>
  export default {
    name: "ShopInfo",
    props:{
      shop:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    filters:{
      sellCountFilter:function (value) {
        if(value < 10000){
          return value;
        }else {
          return (value/10000).toFixed(1) + '万'
        }
      }
    }
  }
</script>

<style scoped>
  .shop-info{
    padding: 10px 5px;
    border-top: 3px solid rgba(187, 185, 185, 0.2);
  }
  /*商家Logo与店名的展示*/
  .shop-mes{
    display: flex;
    font-size: 14px;
    margin: 20px 0;
  }
  .shop-mes .name{
    height: 50px;
    line-height: 50px;
    padding: 0 15px;
    text-align: center;
  }
  .shop-mes .shop-mes-img{
    /*display: inline-block;*/
    width: 50px;
    height: 50px;
    line-height: 55px;
    border: 1px solid #d1d1d1;
    border-radius: 50%;
    text-align: center;
  }
  .shop-mes img{
    width: 20px;
    height: 20px;
  }
/*商家数据与评分的展示*/
  .shop-data{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .shop-num{
    display: flex;
    padding: 10px 20px;
  }
  .shop-num .shop-sells{
    margin-right: 30px;
    text-align: center;
  }
  .shop-num .shop-goods-count{
    text-align: center;
  }
  .shop-num .text{
    padding: 5px 0;
    font-size: 12px;
  }
  /*分割线*/
  .split{
    width: 1px;
    height: 50px;
    background-color: rgba(187, 185, 185, 0.2);
  }
  .shop-score table{
    border-spacing: 20px 5px;/*横向间距为10，纵向间距为5*/
    font-size: 13px;
  }
  .shop-score .red{
    background-color: #ff0000;
    color: #ffffff;
  }
  .shop-score .yellow{
    background-color: #00ff00;
    color: #ffffff;
  }
  .shop-score .redColor{
    color: #ff0000;
    font-size:12px;
  }
  .shop-score .yellowColor{
    color: #00ff00;
    font-size:12px;
  }

  .but{
    width: 200px;
    background-color: #f3f3fb;
    /*padding: 5px 0;*/
    border-radius: 10px;
    text-align: center;
    margin: 10px auto 20px;
  }
</style>
