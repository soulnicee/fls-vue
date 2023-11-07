import { createStore } from "vuex";
import students from "@/data/students.json";
import { transformCategory } from "./helpers";
 const store = createStore({
  state() {
    return {
      studentsList: [],
      currentCategory: undefined
  }
  },
  getters: {
    filteredByCategory: ({studentsList, currentCategory}) => 
    !currentCategory 
    ? studentsList
    : studentsList.filter((student) => student.score >= currentCategory.minScore &&  student.score <= currentCategory.maxScore),
    currentCategory: ({currentCategory}) => currentCategory,
    studentsList: ({studentsList}) => studentsList,
    studentsListWithCategory: (state, getters) => (scoreCategory) => 
    scoreCategory === 12 
    ? getters.filteredByCategory 
    : getters.filteredByCategory.map((student) => ({
      ...student,
      score: transformCategory(student.score)
    }))
  },
  mutations: {
    setStudentsList(state, list) {
       state.studentsList = list
    },
    setCategory(state, category) {
      state.currentCategory = category
    }
  },
  actions: {
    loadStudentsList({commit}) {
      commit('setStudentsList', students)
    },
    setStudentCategory({commit}, category) {
      commit('setCategory', category)
    }
  },
  modules: {},
});
export default store