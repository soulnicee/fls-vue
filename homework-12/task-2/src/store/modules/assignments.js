export default {
  namespaced: true,
  state: {
    assignmentsList: [
      {id: 1, lessonId: 7, teacherId: 3},
      {id: 2, lessonId: 2, teacherId: 5},
      {id: 3, lessonId: 5, teacherId: 1},
      {id: 4, lessonId: 6, teacherId: 6},
      {id: 5, lessonId: 4, teacherId: 2},
      {id: 6, lessonId: 3, teacherId: 4},
      {id: 7, lessonId: 1, teacherId: 7},
    ]
  },
  getters: {
    getAssignmentsList:(state, getters, rootState, rootGetters) => {
      let getTeacherById = rootGetters['teachers/getTeacherById']
      let getLessonDataById = rootGetters['lessons/getLessonDataById']
      return state.assignmentsList.map((item) => ({
          id: item.id,
          teacherName: getTeacherById(item.teacherId).name,
          ...getLessonDataById(item.lessonId)
      }))
    },
    getAssignmentDataById:(state, getters, rootState, rootGetters) => (assignmentId) => {
      if (assignmentId) {
        let assignmentItem = state.assignmentsList.find((assignment) => assignment.id == assignmentId)
        let getTeacherById = rootGetters['teachers/getTeacherById']
        let getLessonDataById = rootGetters['lessons/getLessonDataById']
      return {
        id: assignmentItem.id,
        teacherName: getTeacherById(assignmentItem.teacherId).name,
        ...getLessonDataById(assignmentItem.lessonId)
        }
      }
      
    }
  },
  mutations: {
    deleteAssignment(state, assignmentId) {
      state.assignmentsList = state.assignmentsList.filter((item) => item.id !== assignmentId)
    },

    addAssignment(state, assignmentData) {
      state.assignmentsList.push(assignmentData)
    },
    updateAssignment(state, assignmentData) {
      let assignmentIndex = state.assignmentsList.findIndex((index) => index.id == assignmentData.id)
      state.assignmentsList[assignmentIndex] = assignmentData
    }
  },
  actions: {
    deleteAssignment({commit}, assignmentId) {
      commit('deleteAssignment', assignmentId)
    },

    addAssignment({commit}, assignmentData) {
      commit('addAssignment', {
        id: new Date().getTime(),
        ...assignmentData
      })
    },
    updateAssignment({commit}, assignmentData) {
      commit('updateAssignment',assignmentData)
    }
  }
}