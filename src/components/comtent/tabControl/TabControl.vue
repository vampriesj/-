<template>
    <div class="tab-control">
      <div v-for="(item,index) in title" class="content" :class="{active:index===currentIndex}" @click="tabClick(index)">
        <span class="text">{{item}}</span>
      </div>
    </div>
</template>

<script>
  export default {
    name: "TabControl",
    props:{
      title:{
        type:Array,
        default(){
          return []
        }
      },
    },
    data(){
      return {
        currentIndex:0
      }
    },
    methods:{
      tabClick(index){
        this.currentIndex=index;
        this.$emit('tabClick',index);
      }
    }
  }
</script>

<style scoped>
  .tab-control{
    display: flex;
  }
  .tab-control .content{
    flex: 1;
    text-align: center;
    height: 35px;
    line-height: 35px;
    font-size: 14px;
  }
  .active .text{

    padding:0 5px 3px;
    border-bottom: 3px solid var(--color-tint);
  }
  .active{
    color: var(--color-tint);
  }
</style>
