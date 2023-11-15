
const state = {
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
}
const getters = {
  getCompaniesList:({companiesList})=> companiesList,
  getCompanyById:(state) => (companyId) => state.companiesList.find((company) => company.id == companyId),
}
const mutations = {
  removeCompany(state, companyID) {
    state.companiesList = state.companiesList.filter((company) => company.id !== companyID)
  },
  addCompany(state, company) {
    state.companiesList.push(company)
  },
  updateCompany(state, companyObj) {
    const compIndex = state.companiesList.findIndex((company) => company.id === companyObj.id)
    state.companiesList[compIndex] = companyObj
  },
}
const actions = {
  removeCompany({commit}, companyId) {
    commit('removeCompany', companyId)
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
}
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
