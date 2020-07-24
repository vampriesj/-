<template>
    <div class="cart-list">
      <cart-list-item v-for="item in cartList" :item="item"></cart-list-item>
    </div>
</template>

<script>
  import CartListItem from "./CartListItem";
  import {mapGetters} from "vuex";
  export default {
    name: "CartList",
    components:{
      CartListItem
    },
    computed:{
      ...mapGetters([
        'cartList'
      ])
    },

  }
</script>

<style scoped>
  .cart-list{
    width: 100%;
  }
</style>
