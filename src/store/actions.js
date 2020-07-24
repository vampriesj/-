import {ADD_COUNTER,ADD_TO_CART} from './mutation_types'
export default {
  addCart(context, payload) {
    return new Promise((resolve,reject) => {
      //查找之前是否有该商品
      let oldProduct = context.state.cartList.find(item => item.id === payload.id)

      if (oldProduct) {
        context.commit(ADD_COUNTER, oldProduct)
        resolve('当前商品+1')
      } else {
        payload.count = 1;
        context.commit(ADD_TO_CART, payload)
        resolve('添加了新的商品')
      }
    })

  }
}
