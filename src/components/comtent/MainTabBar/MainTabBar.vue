<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <div slot="item-icon" class="icon"><img src="~assets/img/tabbar/home.svg"></img></div>
      <div slot="item-icon-active" class="icon"><img src="~assets/img/tabbar/home_active.svg"></img></div>
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <div slot="item-icon" class="icon"><img src="~assets/img/tabbar/category.svg"></img></div>
      <div slot="item-icon-active" class="icon"><img src="~assets/img/tabbar/category_active.svg"></img></div>
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/shopcart">
      <div slot="item-icon" class="icon"><img src="~assets/img/tabbar/shopcart.svg"></img></div>
      <div slot="item-icon-active" class="icon"><img src="~assets/img/tabbar/shopcart_active.svg"></img></div>
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <div slot="item-icon" class="icon"><img src="~assets/img/tabbar/profile.svg"></img></div>
      <div slot="item-icon-active" class="icon"><img src="~assets/img/tabbar/profile_active.svg"></img></div>
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from 'components/common/tabbar/TabBar.vue'
  import TabBarItem from 'components/common/tabbar/TabBarItem.vue'
    export default {
      name: "MainTabBar",
      components:{
        TabBar,
        TabBarItem
      }
    }
</script>

<style scoped>

</style>
