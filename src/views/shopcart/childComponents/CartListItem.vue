<template>
  <div class="cart-item">
    <div class="item-select">
      <check-button :is-check="item.check" @click.native="checkClick"></check-button>
    </div>
    <div class="cart-item-img"><img :src="item.image" alt=""></div>
    <div class="cart-item-right">
      <div>
        <div class="text">{{item.title}}</div>
        <div class="text desc">{{item.desc}}</div>
      </div>
      <div class="item-bottom">
        <div class="price">￥{{item.price}}</div>
        <div class="count">x{{item.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import CheckButton from "components/comtent/checkButton/CheckButton";
  export default {
    name: "CartListItem",
    components:{
      CheckButton
    },
    props:{
      item:{
        type:Object,
        default:{}
      }
    },
    mounted() {
      console.log(this.item)
    },
    methods:{
      checkClick(){
        this.item.check = !this.item.check
      }
    }
  }
</script>

<style scoped>
  .cart-item{
    display: flex;
    padding: 10px 5px;
    height: 110px;
    border-bottom: 1px solid #ccc;
  }
  .item-select{
    display: flex;
    width: 30px;
    justify-content: center;
    align-items: center;
  }
  .cart-item-img{
    margin-right: 5px;
    border-radius: 7px;
    overflow: hidden;
  }
  .cart-item-img img{
    width: 70px;
    height: 100%;
  }
  .cart-item-right{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .cart-item-right .text{
    width: 270px;
    font-size: 13px;
    font-weight: bold;
    height: 30px;
    line-height: 30px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .cart-item-right .desc{
    font-size: 12px;
    font-weight: normal;
  }
  .cart-item-right .item-bottom{
    display: flex;
    justify-content: space-between;
  }
  .cart-item-right .item-bottom .price{
    font-size: 14px;
    color: #ff8800;
  }
  .cart-item-right .item-bottom .count{
    font-size: 14px;
  }
</style>
