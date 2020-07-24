<template>
    <div class="message-show" v-if="goods.services">
      <div>{{goods.title}}</div>
      <div class="price">
        <span class="price-new">{{goods.newPrice}}</span>
        <span class="price-old">{{goods.oldPrice}}</span>
        <span class="discount">{{goods.discount}}</span>
      </div>
      <div class="col">
        <span>{{goods.columns[0]}}</span>
        <span>{{goods.columns[1]}}</span>
        <span>{{goods.services[goods.services.length-1].name}}</span>
      </div>
      <div class="ser">
        <div class="ser-item" v-for="index in goods.services.length-1" :key="index">
          <img :src="goods.services[index-1].icon" alt="">
          <span>{{goods.services[index-1].name}}</span>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: "ShopMessage",
    props:{
      goods:{
        type:Object,
        default(){
          return {}
        }
      },
    },
    data(){
      return {

      }
    },
    created() {


    }
  }
</script>

<style scoped>
  .message-show{
    /*padding: 10px 5px 10px;*/
    padding: 5px;
  }
  .price{
    padding: 10px 0 20px;
  }
  .price-new{
    color: var(--color-high-text);
    font-size: 18px;
    margin-right: 5px;
  }
  .price-old{
    color: #b1afaf;
    font-size: 11px;
    text-decoration: line-through;
  }
  .discount{
    position: relative;
    color: #ffffff;
    background-color: var(--color-tint);
    border-radius: 10px;
    font-size: 12px;
    padding: 2px 5px;
    left: 5px;
    bottom: 10px;
  }
  .col{
    display: flex;
    justify-content: space-between;
    color: #bbb9b9;
    font-size: 11px;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(187, 185, 185, 0.11);
  }
  .ser{
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    height: 60px;
    line-height: 60px;
    /*border-bottom: 3px solid rgba(187, 185, 185, 0.11);*/
  }
  .ser img{
    width: 13px;
    height: 13px;
  }
</style>
