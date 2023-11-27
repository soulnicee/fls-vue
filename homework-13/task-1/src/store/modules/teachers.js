import { teachersList } from "@/data/teachersList.js";
export default {
  namespaced: true,
  state: {

  },
  getters: {
    teachersList:() => teachersList,
    getTeacherById:(state, getters) => (teacherId) => getters.teachersList.find((item) => item.id == teacherId),
    getTeacherBySubjectId:(state, getters) => (subjectId) => getters.teachersList.find((item) => item.subjectId === subjectId),
    filteredTeachersList:(state, getters) => (selectedSubjectId) => getters.teachersList.filter((item) => item.subjectId === selectedSubjectId)
  },
  mutations: {
    
  },
  actions: {
    
  }
}