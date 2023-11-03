import { createStore } from "vuex";
import notebooksList from "@/constants/notebooksList.json";
import sellersList from "@/constants/sellersList.json";
import brandsList from "@/constants/brandsList.json";

const store =  createStore({
  state: {
    notebooksList: [],
    sellersList: [],
    brandsList: [],
    choosenSeller: [],
    choosenBrand: []
  },
  getters: {
    notebooksList: ({notebooksList}) => notebooksList,
    sellersList: ({sellersList}) => sellersList,
    brandsList: ({brandsList}) => brandsList,
    filteredNotebooksList: (state) =>{
      const choosSelLength = state.choosenSeller.length === 0
      const choosBrandLength = state.choosenBrand.length === 0
      if (!choosSelLength && !choosBrandLength) state.notebooksList
      else {
        return state.notebooksList.filter((notebook) => {
          const checkSeller = choosSelLength || state.choosenSeller.includes(notebook.storeId)
          const checkBrand = choosBrandLength || state.choosenBrand.some((brand) => brand.name === notebook.brand)
          return checkSeller && checkBrand
       })
      }
    }
  },
  mutations: {
    setNotebooksList: (state, list) =>state.notebooksList = list,
    setSellersList: (state, list) => state.sellersList = list,
    setBrandsList: (state, list) =>state.brandsList = list,
    filterBySeller: (state, choosenSellerList) => state.choosenSeller = choosenSellerList,
    filterByBrand: (state, choosenBrandList) => state.choosenBrand = choosenBrandList
  },
  actions: {
    loadNotebooksList: ({commit}) => commit('setNotebooksList', notebooksList),
    loadSellersList: ({commit}) => commit('setSellersList', sellersList),
    loadBrandsList: ({commit}) => commit('setBrandsList', brandsList),
    getChoosenSeller: ({commit}, choosenSellerList) =>commit('filterBySeller', choosenSellerList),
    getChoosenBrand: ({commit}, choosenBrandList) =>commit('filterByBrand', choosenBrandList),
  },
  
  modules: {},
});
export default store
