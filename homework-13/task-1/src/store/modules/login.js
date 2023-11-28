export default {
  namespaced: true,
  state: {
    userData: null,
    isAuth: false
  },
  getters: {
    userData:({userData}) => userData,
    isAuth:({isAuth}) => isAuth
  },
  mutations: {
    setUserData(state, userData) {      
      state.userData = userData
      state.isAuth = !state.isAuth
    }
  },
  actions: {
  setUserData({commit}, userData) {
    commit('setUserData', userData)
  }
  }
}