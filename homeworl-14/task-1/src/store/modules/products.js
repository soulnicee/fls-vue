import { productsList } from "@/data/productsList.js";
import { v4 as uuidv4 } from 'uuid';
export default {
  namespaced: true,
  state: {
    productsList: productsList,
  inputValue: '',
  },
  getters: {
    productsList:({productsList}) => productsList,
    getInputValue:({inputValue}) => inputValue,
    filteredProductsList:(state, getters) => {
      if (state.inputValue) {
        return getters.productsList.filter((item) => item.title.toLowerCase().includes(state.inputValue.toLowerCase()))
      } else return getters.productsList
    }
  },
  mutations: {
    setNewInputValue(state, newValue) {
      state.inputValue = newValue
    },
    addNewProduct(state, newProduct) {
      state.productsList.push(newProduct)
    }
  },
  actions: {
    setNewInputValue({commit}, newValue) {
      commit('setNewInputValue', newValue)
    },
    addNewProduct({commit}, newProduct) {
      commit('addNewProduct', {
        ...newProduct,
        id: uuidv4()
      })
    }
  }
};