export default {
  namespaced: true,
  state: {
    teachersList: [
      { id: 1, name: 'Олександр', subjectId: 7 },
      { id: 2, name: 'Наталія', subjectId: 2 },
      { id: 3, name: 'Ігор', subjectId: 10 },
      { id: 4, name: 'Людмила', subjectId: 4 },
      { id: 5, name: 'Володимир', subjectId: 6 },
      { id: 6, name: 'Тетяна', subjectId: 8 },
      { id: 7, name: 'Вікторія', subjectId: 5 },
      { id: 8, name: 'Олег', subjectId: 9 },
      { id: 9, name: 'Ірина', subjectId: 2 },
      { id: 10, name: 'Андрій', subjectId: 3 },
      { id: 11, name: 'Олена', subjectId: 8 },
      { id: 12, name: 'Михайло', subjectId: 4 },
      { id: 13, name: 'Марія', subjectId: 3 },
      { id: 14, name: 'Сергій', subjectId: 5 },
      { id: 15, name: 'Євген', subjectId: 6 },
    ]
  },
  getters: {
    getTeachersBySubjectId:(state, getters, rootState, rootGetters) => (subjId) => {
      return state.teachersList.filter((teacher) => teacher.subjectId == subjId).map((item) => {
        let getSubjectById = rootGetters['getSubjectById']
        return {
          id: item.id,
          name:item.name,
          subjectName: getSubjectById(item.subjectId).subject,
        }
      })
    },
    getTeacherById: (state) => (teacherId) => state.teachersList.find((item) => item.id == teacherId),
    getSubjectTeacherById: (state) => (teacherId) => state.teachersList.find((item) => item.id == teacherId).subjectId,
    teachersList:(state, getters, rootState, rootGetters) => state.teachersList.map((teacher) => ({
      id:teacher.id,
      name:teacher.name,
      subjectName: rootGetters.getSubjectById(teacher.subjectId).subject
    }))
  },
  mutations: {
    deleteTeacher(state, teacherId) {
      state.teachersList = state.teachersList.filter((teacher) => teacher.id !== teacherId)
    },
    addTeacher(state, teacher) {
      state.teachersList.push(teacher)
    },
    updateTeacher(state, teacher) {
      const teacherIndex = state.teachersList.findIndex((item) => item.id == teacher.id)
      state.teachersList[teacherIndex] = teacher
    }
  },
  actions: {
    deleteTeacher({commit}, teacherId) {
      commit('deleteTeacher', teacherId)
    },
    addTeacher({commit}, teacherData) {
      commit('addTeacher', {
        id: new Date().getTime(),
        ...teacherData
      })
    },
    updateTeacher({commit}, teacher) {
      commit('updateTeacher', teacher)
    }
  }
};