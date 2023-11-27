import { teachersList } from "@/data/teachersList.js";
export default {
  namespaced: true,
  state: {

  },
  getters: {
    teachersList:() => teachersList,
    filteredTeachersList:(state, getters) => (selectedSubjectId) => getters.teachersList.filter((item) => item.subjectId === selectedSubjectId)
  },
  mutations: {
    
  },
  actions: {
    
  }
}