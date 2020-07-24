<template>
    <div class="nav-bar">
      <nav-bar>
        <div class="back" slot="left" @click="backClick">
          <img src="~assets/img/common/back.svg" alt="">
        </div>
        <div class="nav" slot="center">
          <div class="nav-bar-item" :class="{active:currentIndex===index}" v-for="(item,index) in navTitle" @click="navClick(index)">{{item}}</div>
        </div>
      </nav-bar>
    </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  export default {
    name: "DetailNavBar",
    components:{
      NavBar
    },
    data(){
      return {
        navTitle:['商品','参数','评论','推荐'],
        currentIndex:0
      }
    },
    methods:{
      navClick(index){
        this.currentIndex = index
        this.$emit('titleClick',index)
      },
      backClick(){
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped>
  .back{
    padding-top: 5px;
  }
  .nav{
    display: flex;
  }
  .nav-bar-item{
    flex: 1;
    font-size: 14px;
  }
  .active{
    color: var(--color-high-text);
  }
</style>
