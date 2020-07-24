<template>
  <div class="cate-list">
    <div class="list-item" v-for="(item,index) in categoryList" :class="{active:index===currentIndex}" @click="itemClick(index)">{{item.title}}</div>
  </div>
</template>

<script>
  export default {
    name: "CategoryList",
    props:{
      categoryList:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data(){
      return {
        currentIndex:0
      }
    },
    methods:{
      itemClick(index){
        this.currentIndex = index
        this.$emit('itemClick',index)
      }
    }
  }
</script>

<style scoped>
  .cate-list{
    text-align: center;
  }
  .cate-list .list-item{
    padding:10px 0px;
    background-color: rgba(211,211,211,.2);
  }
  .cate-list .active{
    color: var(--color-tint);
    background-color: #eeeeee;
  }
</style>
