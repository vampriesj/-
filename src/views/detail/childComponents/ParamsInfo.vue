<template>
    <div class="params-info" v-if="Object.keys(paramInfo).length!==0">
      <table class="table" v-for="sizes in paramInfo.sizes">
        <tr v-for="(list,indexX) in sizes" :key="indexX">
          <td v-for="(item,indexY) in list" :key="indexY">{{item}}</td>
        </tr>
      </table>
      <table class="info table">
        <tr v-for="(infos,index) in paramInfo.infos" :key="index">
          <td>{{infos.key}}</td>
          <td class="pink">{{infos.value}}</td>
        </tr>
      </table>
      <div class="image-info" v-if="paramInfo.image!==''">
        <img :src="paramInfo.image" alt="">
      </div>
    </div>
</template>

<script>
  export default {
    name: "ParamsInfo",
    props:{
      paramInfo:{
        type:Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .params-info{
    padding: 20px 5px;
    width: 100%;
    border-top: 3px solid rgba(187, 185, 185, 0.2);
  }
  .table,td{
    border-collapse:collapse;
    border-bottom: 1px solid #eeeeee;
  }
  .table,tr{
    width: 100%;
  }
  .table td{
    font-size: 12px;
    white-space: nowrap;
    text-align: left;
    vertical-align: center;
    padding:10px 0 10px 10px;
  }
  .table .pink{
    padding-left: 50px;
    color: var(--color-high-text);
  }
  .image-info img{
    width: 100%;
    height: 80%;
  }
</style>
