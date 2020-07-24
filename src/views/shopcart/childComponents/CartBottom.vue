<template>
    <div class="cart-bottom">
      <div class="bottom-all">
        <div class="item-select">
          <check-button :is-check="isCheck" @click.native="checkClick"></check-button>
        </div>
        <span>全选</span>
      </div>
      <div class="bottom-counter">合计：￥{{totalPrice}}</div>
      <div class="bottom-calculate" @click="calculateClick">去计算 ({{checkLength}})</div>
    </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import CheckButton from "components/comtent/checkButton/CheckButton";
  export default {
    name: "CartBottom",
    components:{
      CheckButton
    },
    computed:{
      ...mapGetters(['cartList','cartLength']),
      //this.$store.state.cartList
      totalPrice(){
        return this.cartList.filter(item => {
          return item.check
        }).reduce((preValue , item) => {
          return preValue+item.price * item.count
        }, 0 ).toFixed(2)
      },
      checkLength(){
        return this.cartList.filter(item => item.check).length
      },
      isCheck(){
        if (this.cartLength === 0){
          return false
        }
        //find() 对于空数组，函数是不会执行的。
        // 注意: find() 并没有改变数组的原始值。如果没有符合条件的元素返回 undefined
        return !this.cartList.find(item => item.check==false)
      }
    },
    methods:{
      checkClick(){
        if(this.isCheck){
          this.cartList.forEach(item => item.check=false)
        }
        else {
          this.cartList.forEach(item => item.check=true)
        }
        // this.cartList.forEach(item => item.check = !this.isCheck),这样简化因为计算属性isCheck和点击事件会相互影响，所以不能简化
      },
      calculateClick(){
        console.log('calculate')
        if (!this.checkLength){
          this.$toast.show('当前没有选择商品')
        }
      }
    }
  }
</script>

<style scoped>
  .cart-bottom{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5px;
  }
  .item-select{
    display: flex;
    width: 30px;
    justify-content: center;
    align-items: center;
  }
  .bottom-all{
    display: flex;
  }
  .bottom-calculate{
    color: #ffffff;
    font-size: 13px;
    background-color: red;
    height: 40px;
    line-height: 40px;
    padding: 0 15px;
  }
</style>
