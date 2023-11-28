import { createStore } from "vuex";
import subjects from "@/store/modules/subjects.js";
import teachers from "@/store/modules/teachers.js";
import lessons from "@/store/modules/lessons.js";
export default createStore({
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
  },
  modules: {
    subjects,
    teachers,
    lessons
  },
});
