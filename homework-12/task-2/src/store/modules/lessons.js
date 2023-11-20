export default {
  namespaced: true,
  state: {
    lessonsList: [
      {id: 1, subjectId: 7, classId: 3},
      {id: 2, subjectId: 2, classId: 5},
      {id: 3, subjectId: 5, classId: 1},
      {id: 4, subjectId: 9, classId: 6},
      {id: 8, subjectId: 7, classId: 5},
      {id: 5, subjectId: 4, classId: 2},
      {id: 6, subjectId: 10, classId: 4},
      {id: 7, subjectId: 1, classId: 7},
    ]
  },
  getters: {
    getLessonsList:(state, getters, rootState, rootGetters) => {
      let getSubjectById = rootGetters['getSubjectById']
      let getClassesById = rootGetters['getClassesById']
      return state.lessonsList.map((item) => ({
        id: item.id,
        subjectTitle: getSubjectById(item.subjectId).subject,
        classTitle: getClassesById(item.classId).classTitle
      }))
    },
    getLessonById:(state) => (lessonId) => {
      return state.lessonsList.find((lesson) => lesson.id == lessonId)
    },
    getLessonsBySubjectId:(state, getters, rootState, rootGetters) => (subjId) => {
      return state.lessonsList.filter((lesson) => lesson.subjectId == subjId).map((item) => {
        let getSubjectById = rootGetters['getSubjectById']
      let getClassesById = rootGetters['getClassesById']
        return {
          id: item.id,
          subjectTitle: getSubjectById(item.subjectId).subject,
        classTitle: getClassesById(item.classId).classTitle
        }
      })
    },
    getClassSubjectById: (state) => (classId) => state.lessonsList.find((item) => item.id == classId).subjectId,
    getLessonDataById:(state, getters, rootState, rootGetters) => (lessonId) => {
      let lessonData = state.lessonsList.find((item) => item.id == lessonId)
      let getSubjectById = rootGetters['getSubjectById']
      let getClassesById = rootGetters['getClassesById']
      return {
        subjectTitle: getSubjectById(lessonData.subjectId).subject,
        classTitle: getClassesById(lessonData.classId).classTitle
      }
    }
  },
  mutations: {
    deleteLesson(state, lessonId) {
      state.lessonsList = state.lessonsList.filter((item) => item.id !== lessonId)
    },
    addLesson(state, lessonData) {
      state.lessonsList.push(lessonData)
    },
    updateLesson(state, lessonData) {
      let lessonIndex = state.lessonsList.findIndex((index) => index.id == lessonData.id)
      state.lessonsList[lessonIndex] = lessonData
    }
  },
  actions: {
    deleteLesson({commit}, lessonId) {
      commit('deleteLesson', lessonId)
    },
    addLesson({commit}, lessonData) {
      commit('addLesson', {
        id: new Date().getTime(),
        ...lessonData
      })
    },
    updateLesson({commit}, lessonData) {
      commit('updateLesson',lessonData)
    }
  }
}