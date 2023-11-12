import { createStore } from "vuex";
import { carsList } from "@/data/carsList.js";
import { vehicleTypes, carBodyTypes} from "@/data/filters.js";
const store =  createStore({
  state() {
    return {
      carsList: [],
      vehicleTypes:[],
      carBodyTypes:[],
      filters: {
        vehicleType: undefined,
        bodyType: undefined,
        brand: undefined,
        model: undefined,
        yearFrom: undefined,
        yearTo: undefined,
      },
    }
  },
  getters: {
    carsList:({carsList}) => carsList,
    vehicleTypes:({vehicleTypes}) => vehicleTypes,
    carBodyTypes:({carBodyTypes}) => carBodyTypes,
    carBrand:({carsList}) => [...new Set(carsList.map(obj => obj.brand))],
    carModel:({carsList}) => [...new Set(carsList.map(obj => obj.model))],
    filteredCarsList: ({ carsList, filters }) => {
      return carsList.filter(car => {
        return (
          (!filters.vehicleType || car.vehicleType === filters.vehicleType) &&
          (!filters.bodyType || car.bodyType === filters.bodyType) &&
          (!filters.brand || car.brand === filters.brand) &&
          (!filters.model || car.model === filters.model) &&
          (!filters.yearFrom || car.year >= filters.yearFrom) &&
          (!filters.yearTo || car.year <= filters.yearTo)
        )
      })
    },
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
    updateFilterValue(state, { filterName, filterValue }) {
      console.log(filterName, filterValue);
      state.filters = {
        ...state.filters,
        [filterName]: filterValue,
      }
    }
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
    updateFilter({commit}, {filterName, filterValue}) {
      commit('updateFilterValue', {filterName, filterValue})
    }
  },
  modules: {},
});
export default store