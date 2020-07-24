<template>
    <div class="back">
      <img src="~assets/img/common/top.png" alt="">
    </div>
</template>

<script>
  export default {
    name: "BackTop"
  }
</script>

<style scoped>
  .back{
    position: fixed;
    right: 10px;
    bottom: 52px;
    z-index: 11;
  }
  .back img{
    width: 43px;
    height: 43px;
  }
</style>
