<template>
  <div class="cate-right">
    <div v-for="item in maitKeyList">
      <div class="image">
        <a :href="item.link">
          <img :src="item.image">
        </a>
      </div>
      <div class="text">{{item.title}}</div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "CategoryRight",
      props:{
        maitKeyList:{
          type:Array,
          default(){
            return []
          }
        }
      }
    }
</script>

<style scoped>
  .cate-right{
    padding: 10px 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .cate-right .image img{
    width: 80px;
    height: 90px;
  }
  .cate-right .text{
    text-align: center;
    font-size: 13px;
  }
</style>
