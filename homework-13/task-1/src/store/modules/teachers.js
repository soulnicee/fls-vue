import { teachersList } from "@/data/teachersList.js";
export default {
  namespaced: true,
  state: {

  },
  getters: {
    teachersList:() => teachersList,
    getTeacherBySubjectId:(state, getters) => (subjectId) => getters.teachersList.find((item) => item.subjectId === subjectId),
    filteredTeachersList:(state, getters) => (selectedSubjectId) => getters.teachersList.filter((item) => item.subjectId === selectedSubjectId)
  },
  mutations: {
    
  },
  actions: {
    
  }
}