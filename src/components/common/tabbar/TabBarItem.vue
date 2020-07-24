<template>
  <div class="tab-bar-item" @click="itemclick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div v-bind:class="{active:isActive}"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
    export default {
      name: "TabBarItem",
      props:{
        path:String,
        // activecolor:{
        //   type:String,
        //   default:'#ff5777'
        // }
      },
      data(){
          return{
            // isActive:false
            // path:'/home'
          }
      },
      computed:{
        isActive(){
          return this.$route.path.indexOf(this.path)!=-1
        }
      },
      methods:{
        itemclick(){
          // console.log(this.path=='/home');
          this.$router.replace(this.path);
          // if (this.path=='/home'){}else {this.$router.replace(this.path);}
          // this.path=='/home'?'':this.$router.replace(this.path);
        }
      }
    }
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    padding: 5px;
    font-size: 14px;
  }

  .tab-bar-item img{
    width: 24px;
    height: 24px;
  }
  .tab-bar-item .active{
    color: #ff5777;
  }
</style>
