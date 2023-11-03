import { createStore } from "vuex";
import { notebooksList, sellersList, brandsList } from "@/constants/3_data_notebooks.js";
const store =  createStore({
  state: {
    notebooksList,
    sellersList,
    brandsList,
    filteredNotebooksList: notebooksList
  },
  getters: {
    notebooksList: ({notebooksList}) => notebooksList,
    sellersList: ({sellersList}) => sellersList,
    brandsList: ({brandsList}) => brandsList,
    filteredNotebooksList: ({filteredNotebooksList}) => filteredNotebooksList
  },
  mutations: {
    filterList(state, { choosenSellersList, choosenBrandsList }) {
      if (choosenSellersList.length === 0 && choosenBrandsList.length === 0) {
        state.filteredNotebooksList = state.notebooksList
        return
      }
      const filteredNotebooks = state.notebooksList.filter((notebook) => {
        const sellerMatch = choosenSellersList.length === 0 || choosenSellersList.includes(notebook.storeId)
        const brandMatch = choosenBrandsList.length === 0 || choosenBrandsList.some((brand) => brand.name === notebook.brand)
        return sellerMatch && brandMatch
      })
      state.filteredNotebooksList = filteredNotebooks
    }
  },
  actions: {
    getFilteredList({ commit }, { choosenSellersList, choosenBrandsList }) {
      commit('filterList', { choosenSellersList, choosenBrandsList });
    },
  },
  
  modules: {},
});
export default store