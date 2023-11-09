import { createStore } from "vuex";
import { productList, currencyList } from "@/data/lists.js";
import { transformPrice } from "@/store/helpers.js";
 const store = createStore({
  state() {
    return {
      productList: [],
      cartList: new Set(),
      currencyList: [],
      currentCurrencyRate: 1,
      currentCurrencySymbol: '₴'
    }
  },
  getters: {
    summaryPrice:({cartList, currentCurrencyRate}) => {
      let sum = [...cartList].reduce((acc, item) => {
        return acc + item.price * item.count
      },0)
      if (currentCurrencyRate !== 1) {
        sum = transformPrice(sum, currentCurrencyRate)
      }
      return sum
    },
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
      if (currentCurrencyRate == 1) return [...cartList]
      else {
        return [...cartList].map((item) => {
          return {
            ...item,
            price: transformPrice(item.price, currentCurrencyRate),
            summary: transformPrice(item.summary, currentCurrencyRate)
          }
        })
      }
    },
    currencyList: ({currencyList}) => currencyList,
    currentCurrencySymbol: ({currentCurrencySymbol}) => currentCurrencySymbol
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
      let cartItem = [...state.cartList].find(cartItem => cartItem.id === item.id);
      if (cartItem) {
        cartItem.count -= 1;
        cartItem.summary = cartItem.price * cartItem.count;
        if (cartItem.count === 0) {
          state.cartList.delete(cartItem);
        }
      }
    },
    currencyChange(state, currencyId) {
      let currency = state.currencyList.find(item => item.id == currencyId)
      state.currentCurrencyRate = currency.rate
      state.currentCurrencySymbol = currency.symbol
    },
    checkOutProducts(state) {
      state.cartList.clear()
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
    },
    checkOut({commit}) {
      commit('checkOutProducts')
    }
  },
  modules: {},
});
export default store