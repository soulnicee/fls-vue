import { subjectsList } from "@/data/subjectsList.js";
export default {
  namespaced: true,
  state: {
   
  },
  getters: {
    subjectsList:() => subjectsList,
    getSubjectById:(state, getters) => (subjectId) => getters.subjectsList.find((item) => item.id == subjectId)
  },
  mutations: {
    
  },
  actions: {
 
  }
}