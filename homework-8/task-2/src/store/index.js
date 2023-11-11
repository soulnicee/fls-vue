import { createStore } from "vuex";
import { carsList } from "@/data/carsList.js";
import { vehicleTypes, carBodyTypes, truckBodyTypes } from "@/data/filters.js";
const store =  createStore({
  state() {
    return {
      carsList: [],
      vehicleTypes:[],
      carBodyTypes:[],
      truckBodyTypes:[]
    }
  },
  getters: {
    carsList:({carsList}) => carsList,
    vehicleTypes:({vehicleTypes}) => vehicleTypes,
    carBodyTypes:({carBodyTypes}) => carBodyTypes,
    truckBodyTypes:({truckBodyTypes}) => truckBodyTypes,
    carBrand:({carsList}) => [...new Set(carsList.map(obj => obj.brand))],
    carModel:({carsList}) => [...new Set(carsList.map(obj => obj.model))],
  },
  mutations: {
    setCarList(state, list) {
      state.carsList = list
    }, 
    setVehicleTypes(state, list) {
      state.vehicleTypes = list
    },
    setCarBodyTypes(state, list) {
      state.carBodyTypes = list
    },
    setTruckBodyTypes(state, list) {
      state.truckBodyTypes = list
    },
  },
  actions: {
    loadCarList({commit}) {
      commit('setCarList', carsList)
    },
    loadVehicleTypes({commit}) {
      commit('setVehicleTypes', vehicleTypes)
    },
    loadCarBodyTypes({commit}) {
      commit('setCarBodyTypes', carBodyTypes)
    },
    loadTruckBodyTypes({commit}) {
      commit('setTruckBodyTypes', truckBodyTypes)
    },
  },
  modules: {},
});
export default store