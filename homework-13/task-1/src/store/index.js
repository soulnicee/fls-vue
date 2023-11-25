import { createStore } from "vuex";
import login from "@/store/modules/login.js";
import subjects from "@/store/modules/subjects.js";
import teachers from "@/store/modules/teachers.js";
import lessons from "@/store/modules/lessons.js";
export default createStore({
  state: {
    
    
  },
  getters: {
    
    
  },
  mutations: {},
  actions: {},
  modules: {
    login,
    subjects,
    teachers,
    lessons
  },
});
