
  const state = {
    filterObj: {}
  }
  const getters = {
    filterObj:({filterObj}) => filterObj
  }
  const mutations = {
    setFilter(state, filterDataObj) {
      state.filterObj = filterDataObj
    },
  }
  const actions = {
    updateFilter({commit}, filterDataObj) {
      commit('setFilter', filterDataObj)
    },
  }
  export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
