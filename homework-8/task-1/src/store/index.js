import { createStore } from "vuex";
import { categoryList } from "@/data/category.js";
import { productsList } from "@/data/products.js";
const store =  createStore({
  state() {
    return {
      categoryList: [],
      choosenCategory: undefined,
      productsList: {}
    }
  },
  getters: {
    categoryList: ({categoryList}) => categoryList,
    productList: ({productsList, choosenCategory}) =>{
      if (!choosenCategory) return []
      else return productsList[choosenCategory]
    }
  },
  mutations: {
    setCategoryList(state, list) {
      state.categoryList = list
    },
    changeCategory(state, id) {
      state.choosenCategory = id
    },
    setProductList(state, list) {
      state.productsList = list
    },
  },
  actions: {
    loadCategoryList({commit}) {
      commit('setCategoryList', categoryList)
    },
    onChooseCategory({commit}, id) {
      commit('changeCategory', id)
    },
    loadProductList({commit}) {
      commit('setProductList', productsList)
    }, 
  },
  modules: {},
});
export default store