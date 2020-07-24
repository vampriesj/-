<template>
    <div class="nav-bar">
      <nav-bar><div slot="center">商品分类</div></nav-bar>
    </div>
</template>

<script>
  import NavBar from "../../../components/common/navbar/NavBar";
    export default {
        name: "CategoryNavBar",
      components:{
          NavBar
      },
    }
</script>

<style scoped>
  .nav-bar{
    background-color: var(--color-tint);
    color: #eeeeee;
  }
</style>
