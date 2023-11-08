import { createStore } from "vuex";
import { productList, currencyList } from "@/data/lists.js";

 const store = createStore({
  state() {
    return {
      productList: [],
      currencyList: []
    }
  },
  getters: {
    productList:({productList}) => productList,
    currencyList: ({currencyList}) => currencyList
  },
  mutations: {
    setProductList(state, list) {
      state.productList = list
    },
    setCurrencyList(state, list) {
      state.currencyList = list
    },
  },
  actions: {
    loadProductsList({commit}) {
      commit('setProductList', productList)
    },
    loadCurrencyList({commit}) {
      commit('setCurrencyList', currencyList)
    }
  },
  modules: {},
});
export default store