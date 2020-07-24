<template>
    <div class="comment-info" v-if="commentInfo.user">
      <div class="assess-more">
        <div>用户评价</div>
        <div class="more">更多</div>
      </div>
      <div class="assess-list">
        <div class="item-user">
          <div class="head"><img :src="commentInfo.user.avatar" alt=""></div>
          <div class="uname">{{commentInfo.user.uname}}</div>
        </div>
        <div class="item-content">{{commentInfo.content}}</div>
        <div class="item-date">
          <span>{{commentInfo.created | getDate}}</span>
          <span>{{commentInfo.style}}</span>
        </div>
        <div class="item-image" v-if="commentInfo.images!==''">
          <div class="img" v-for="url in commentInfo.images"><img :src="url" alt=""></div>
        </div>
      </div>
    </div>
</template>

<script>
  import {formatDate} from "../../../common/utils";

  export default {
    name: "CommentInfo",
    props:{
      commentInfo:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    filters:{
      getDate(value){
        const date = new Date(value*1000);
        //将date进行格式化
        return formatDate(date,'yyyy-MM-dd');
        // console.log(date);
      }
    }
  }
</script>

<style scoped>
  .comment-info{
    padding: 10px 5px;
    border-top: 3px solid rgba(187, 185, 185, 0.2);
    border-bottom: 3px solid rgba(187, 185, 185, 0.2);
  }
  .assess-more{
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    padding-bottom: 15px;
    border-bottom: 1px solid #eeeeee;
  }
  .more{
    font-weight: bold;
  }
  .assess-list{
    padding: 5px 0px;
  }
  .item-user{
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  .item-user .head{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
  }
  .item-user .head img{
    width: 100%;
    height: 100%;
  }
  .item-user .uname{
    font-weight: bold;
    margin-left: 10px;
  }
  .item-content{
    color: #333;
    font-size: 13px;
    margin-bottom: 10px;
    letter-spacing: 1px;
  }
  .item-date{
    color: #c4c3c4;
    font-size: 11px;
    margin-bottom: 10px;
  }
  .item-date span{
    margin-right: 5px;
  }
  .item-image{
    display: flex;
    /*flex-wrap: nowrap;*/
    /*flex-direction: row;*/
  }
  .item-image .img{
    margin: 0 5px 5px 0;
  }
  .item-image img{
    width: 100px;
    height: 100px;
  }
</style>
