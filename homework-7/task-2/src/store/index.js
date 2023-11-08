import { createStore } from "vuex";
import { productList, currencyList } from "@/data/lists.js";

 const store = createStore({
  state() {
    return {
      productList: [],
      cartList: new Set(),
      currencyList: []
    }
  },
  getters: {
    productList:({productList}) => productList,
    cartList: ({cartList}) => Array.from(cartList),
    currencyList: ({currencyList}) => currencyList
  },
  mutations: {
    setProductList(state, list) {
      state.productList = list
    },
    setCurrencyList(state, list) {
      state.currencyList = list
    },
    addToCartList(state, itemId) {
      let item = state.productList.find(item => item.id === itemId)
      if (state.cartList.has(item)) {
        item.count += 1
        item.summary = item.price * item.count
      } else {
        item.count = 1
        item.summary = item.price
        state.cartList.add(item)
      }
    },
    deleteFromCartList(state, item) {
      if (state.cartList.has(item)) {
        item.count -=1
        item.summary -= item.price 
        if (item.count === 0) {
          state.cartList.delete(item)
        }
      }
    }
  },
  actions: {
    loadProductsList({commit}) {
      commit('setProductList', productList)
    },
    loadCurrencyList({commit}) {
      commit('setCurrencyList', currencyList)
    },
    addToCart({commit}, itemId) {
      commit('addToCartList', itemId)
    },
    deleteFromCart({commit}, item) {
      commit('deleteFromCartList', item)
    }
  },
  modules: {},
});
export default store