<template>
  <div class="goods-item" @click="detailClick">
    <img :src="showImages" alt="" @load="imgLoad">
    <div class="goods-item-title">
      <div class="text">{{goodsItem.title}}</div>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect"><img src="~assets/img/common/collect.svg" alt="star">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsListItem",
    props:{
      goodsItem:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    methods:{
      imgLoad(){
        this.$bus.$emit('imgLoad')
      },
      detailClick(){
        this.$router.push('/detail/'+this.goodsItem.iid)
      }
    },
    computed:{
      showImages(){
        if(this.goodsItem.img ===undefined){
          return this.goodsItem.image || this.goodsItem.show.img
        }else {
          return this.goodsItem.img
        }
      }
    }
  }
</script>

<style scoped>
  .goods-item{
    width: 45%;
    height: 45%;
    position: relative;
    padding-bottom: 40px;
  }
  .goods-item img{
    width: 100%;
    border-radius: 5px;
  }

  .goods-item-title{
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    font-size: 12px;
    text-align: center;
    overflow: hidden;

  }
  .goods-item-title .text{
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .goods-item-title .price{
    color: var(--color-tint);
    margin-right: 10px;
  }
  .goods-item-title .collect img{
    width: 12px;
    height: 12px;
  }
</style>
