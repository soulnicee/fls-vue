import { createStore } from "vuex";
import { productList, currencyList } from "@/data/lists.js";
import { transformPrice } from "@/store/helpers.js";
 const store = createStore({
  state() {
    return {
      productList: [],
      cartList: new Set(),
      currencyList: [],
      currentCurrencyRate: 1
    }
  },
  getters: {
    productList:({productList, currentCurrencyRate}) => {
      if (currentCurrencyRate == 1) return productList
      else {
        return productList.map((item) => {
          return {
            ...item,
            price: transformPrice(item.price, currentCurrencyRate)
          }
        })
      }
    },
    cartList: ({cartList, currentCurrencyRate}) => {
      let newCartList = Array.from(cartList)
      if (currentCurrencyRate == 1) return newCartList
      else {
        return newCartList.map((item) => {
          return {
            ...item,
            price: transformPrice(item.price, currentCurrencyRate),
            summary: transformPrice(item.summary, currentCurrencyRate)
          }
        })
      }
    },
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
      console.log(item);
      if (state.cartList.has(item)) {
        item.count -=1
        
        item.summary -= item.price 
        if (item.count === 0) {
          state.cartList.delete(item)
        }
      }
    },
    currencyChange(state, currencyId) {
      state.currentCurrencyRate = state.currencyList.find(item => item.id == currencyId).rate
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
    },
    onCurrencyChange({commit}, currencyId) {
      commit('currencyChange', currencyId)
    }
  },
  modules: {},
});
export default store