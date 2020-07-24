<template>
  <div class="detail-info" v-if="detailInfo.detailImage">
    <div class="desc">
      <div class="splic-left"></div>
      <div class="text">{{detailInfo.desc}}</div>
      <div class="splic-right"></div>
    </div>
    <div class="detail-show">
      <div v-for="detailImage in detailInfo.detailImage">
        <div class="title">{{detailImage.key}}</div>
        <div class="detailImage" v-for="item in detailImage.list">
          <img :src="item" @load="imgLoad">
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: "DetailInfo",
    props:{
      detailInfo:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    data(){
      return {
        counter:0,
        imgLength:0
      }
    },
    methods:{
      imgLoad(){
        // if(++this.counter === this.imgLength){
          this.$emit('imgLoad');
        // }
      }
    },
    // watch(){
    //     this.imgLength = this.detailInfo.detailImage[0].list.length;
    // }
  }
</script>

<style scoped>
  .detail-info{
    padding: 10px 0;
    border-top: 3px solid rgba(187, 185, 185, 0.11);
  }
  .desc{
    position: relative;
    padding: 10px 5px;
    font-size: 13px;
    /*border-top: 3px solid rgba(187, 185, 185, 0.11);*/
  }
  .desc .splic-left ,.desc .splic-right{
    width: 100px;
    height: 1px;
    background-color: #c0bfc1;
  }
  .desc .splic-right{
    position: absolute;
    right: 0;
  }
  .desc .text{
    padding: 10px;
  }

  .detail-show{
    /*padding: 0 5px;*/
    width: 100%;
  }
  .detail-show .title{
    font-size: 16px;
    font-weight: bold;
  }
  .detail-show .detailImage{
    /*height: 400px;*/
    margin-top: 5px;
  }
  .detail-show .detailImage img{
    width: 100%;
    height: 60%;
  }
</style>
