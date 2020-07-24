<template>
    <div class="shop-cart">
      <nav-bar class="cart-nav">
        <div slot="center">购物车({{cartLength}})</div>
      </nav-bar>
      <scroll class="cart-scroll" ref="scroll">
        <cart-list></cart-list>
      </scroll>
      <cart-bottom class="bottom"></cart-bottom>
    </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import NavBar from "components/common/navbar/NavBar";
  import CartList from "./childComponents/CartList";
  import Scroll from "../../components/common/scroll/Scroll";
  import CartBottom from "./childComponents/CartBottom";

  export default {
    name: "Shopcart",
    components:{
      NavBar,
      CartList,
      Scroll,
      CartBottom
    },
    computed:{
      // cartLength(){
      //   return this.$store.getters.cartLength
      // }
      ...mapGetters([
        'cartLength',
      ])
    },
    activated() {
      this.$refs.scroll.refresh()
    }
  }
</script>

<style scoped>
  .cart-nav{
    background-color: var(--color-tint);
    color: #ffffff;
    font-weight: 700;
  }
  .cart-scroll{
    position: fixed;
    top: 44px;
    bottom: 79px;
    left: 0;
    right: 0;
    overflow: hidden;
  }
  /*设置底部全选的布局位置*/
  .shop-cart .bottom{
    position: fixed;
    bottom: 49px;
    right: 0;
    left: 0;
    z-index: 3;
    height: 40px;
    background-color: #eeedef;
  }
</style>
