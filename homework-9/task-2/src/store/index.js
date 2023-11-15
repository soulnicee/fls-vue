import { createStore } from "vuex";
import companies from "@/store/modules/companies.js";
import filter from "@/store/modules/filter.js";
import { isCorrespondToFilter } from "@/store/helper.js";

const store =  createStore({
  namespaced: true,
  state: {},
  getters: {
    getFilteredCompaniesList:(state, getters, rootState, rootGetters) => {
     return rootGetters['companies/getCompaniesList'].filter((company) => isCorrespondToFilter(company, rootGetters['filter/filterObj']))
    },
  },
  mutations: {},
  actions: {},
  modules: {
    companies,
    filter
  },
});
export default store



