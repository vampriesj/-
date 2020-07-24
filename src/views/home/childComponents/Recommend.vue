<template>
  <div class="recommend">
    <div v-for="item in recommends" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Recommend",
      props:{
          recommends:{
            type:Array,
            default() {
              return [];
            }
          }
      }
    }
</script>

<style scoped>
  .recommend{
    display: flex;
    text-align: center;
    padding: 10px;
    border-bottom: 8px solid #eeeeee;
  }
  .recommend-item{
    flex: 1;
  }
  .recommend-item a img{
    width: 65%;
    height: 65%;
  }
  .recommend-item a div{
    font-size: 14px;
  }
</style>
