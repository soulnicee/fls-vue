import { createStore } from "vuex";
import { isCorrespondToFilter } from "@/store/helper.js";
const store =  createStore({
  state() {
    return {
      companiesList: [
        {
          id: 1,
          title: 'Kolbaska',
          year: 2020,
          taxRate: 5,
          owner: 'John'
        },
        {
          id: 2,
          title: 'Pivko',
          year: 2015,
          taxRate: 5,
          owner: 'Andriy'
        }
      ],
      filterObj: {}
    }
  },
  getters: {
    getCompaniesList:({companiesList})=> companiesList,
    getCompanyById:(state) => (companyId) => state.companiesList.find((company) => company.id == companyId),
    getFilteredCompaniesList:(state) => state.companiesList.filter((company) => isCorrespondToFilter(company, state.filterObj)),
  },
  mutations: {
    removeCompany(state, companyID) {
      state.companiesList = state.companiesList.filter((company) => company.id !== companyID)
    },
    setFilter(state, filterDataObj) {
      state.filterObj = filterDataObj
    },
    addCompany(state, company) {
      state.companiesList.push(company)
    },
    updateCompany(state, companyObj) {
      const compIndex = state.companiesList.findIndex((company) => company.id === companyObj.id)
      state.companiesList[compIndex] = companyObj
    },
  },
  actions: {
    removeCompany({commit}, companyId) {
      commit('removeCompany', companyId)
    },
    updateFilter({commit}, filterDataObj) {
      commit('setFilter', filterDataObj)
    },
    addCompany({commit}, company) {
      commit('addCompany', {
        id: new Date().getTime(),
        ...company
      })
    },
    updateCompany({commit}, company) {
      commit('updateCompany', company)
    },
  },
  modules: {},
});
export default store



