import { v4 as uuidv4 } from 'uuid';
export default {
  namespaced: true,
  state: {
   studyPlan: []
  },
  getters: {
    studyPlan:({studyPlan}) => studyPlan,
    transformedStudyPlanData:(state, getters, rootState, rootGetters) => getters.studyPlan.map((lessonPair) => ({
      ...lessonPair,
      subjectName: rootGetters['subjects/getSubjectById'](lessonPair.subjectId).name,
      teacherName: rootGetters['teachers/getTeacherById'](lessonPair.teacherId).name
    }))
  },
  mutations: {
    addLessonPair(state, lessonPair) {
      lessonPair.map((item) => {
        let newLesson = {
          ...item,
          lessonPairId: uuidv4()
        }
        state.studyPlan.push(newLesson)
      })
    },
    removeLessonPair(state, lessonPairId) {
      console.log(state.studyPlan);
      console.log(lessonPairId);
      state.studyPlan = state.studyPlan.filter((item) => item.lessonPairId !== lessonPairId)
    }
  },
  actions: {
    addLessonPair({commit}, lessonPair) {
      commit('addLessonPair', lessonPair)
    },
    removeLessonPair({commit}, lessonPairId) {
      commit('removeLessonPair', lessonPairId)
    }
  }
}