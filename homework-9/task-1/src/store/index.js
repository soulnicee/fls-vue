import { createStore } from "vuex";
import { productsList } from "@/data/products.js";
import { mainTextList, productCategory } from "@/data/textData.js";
 const store = createStore({
  state() {
    return {
      productsList: [],
      mainTextList: [],
      productCategory: [],
    }
  },
  getters: {
    productsList:({productsList}) => productsList,
    mainTextList:({mainTextList}) => mainTextList,
    productCategory:({productCategory}) => productCategory,
  },
  mutations: {
    setProductsList(state, list) {
      state.productsList = list
    },
    setMainTextList(state, list) {
      state.mainTextList = list
    },
    setProductCategory(state, list) {
      state.productCategory = list
    }
  },
  actions: {
    loadProductsList({commit}) {
      commit('setProductsList',productsList )
    },
    loadMainTextList({commit}) {
      commit('setMainTextList',mainTextList )
    },
    loadProductCategory({commit}) {
      commit('setProductCategory',productCategory )
    }
  },
  modules: {},
});
export default store