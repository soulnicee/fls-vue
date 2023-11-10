import { createStore } from "vuex";
import { carsList } from "@/data/carsList.js";
const store =  createStore({
  state() {
    return {
      carsList: []
    }
  },
  getters: {
    carsList:({carsList}) => carsList
  },
  mutations: {
    setCarList(state, list) {
      state.carsList = list
    }
  },
  actions: {
    loadCarList({commit}) {
      commit('setCarList', carsList)
    }
  },
  modules: {},
});
export default store