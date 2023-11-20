import { createStore } from "vuex";
import {subjects} from "@/data/subjects.js";
import {classesList} from "@/data/classes.js";
import teachers from "@/store/modules/teachers.js";
import lessons from "@/store/modules/lessons.js";
import assignments from "@/store/modules/assignments.js";

export default createStore({
  state: {},
  getters: {
    getSubjects: () => subjects,
    getClassesList: () => classesList,
    getSubjectById:(state, getters) => (subjectId) => getters.getSubjects.find((subject) => subject.id == subjectId),
    getClassesById:(state, getters) => (classId) => getters.getClassesList.find((classItem) => classItem.id == classId),
  },
  mutations: {},
  actions: {},
  modules: {
    teachers,
    lessons,
    assignments
  },
});
