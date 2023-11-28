import {  deleteElement, updateElement, getElementById, deleteInterviewByWorkerId, deleteInterviewByAplicantId } from "@/store/helpers.js";
export default {
  namespaced: true,
  state: {
    interviewsList: [
      {id: 1, workerId: 2, aplicantId: 1, dayId: 1},
      {id: 2, workerId: 3, aplicantId: 2, dayId: 3},
      {id: 3, workerId: 7, aplicantId: 6, dayId: 5},
    ]
  },
  getters: {
    interviewsList:({interviewsList}) => interviewsList,
    getInterviewsById:(state, getters) => (interviewId) => getElementById(getters.transformedInterviewsList, interviewId),
    transformedInterviewsList:(state, getters, rootState, rootGetters) => getters.interviewsList.map((item) => ({
      ...item,
      workerName: rootGetters['workers/getWorkerById'](item.workerId).name,
      aplicantName: rootGetters['aplicants/getAplicantById'](item.aplicantId).name,
      professionName: rootGetters['getProfessionById'](item.workerId),
      dayName: rootGetters['getDayById'](item.dayId)
    })),
  },
  mutations: {
    deleteInterview(state, interviewId) {
      state.interviewsList = deleteElement(state.interviewsList, interviewId)
    },
    deleteInterviewWorkerId(state, workerId) {
      state.interviewsList = deleteInterviewByWorkerId(state.interviewsList, workerId)
    },
    deleteInterviewAplicantId(state, aplicantId) {
      state.interviewsList = deleteInterviewByAplicantId(state.interviewsList, aplicantId)
    },
    addNewInterview(state, interviewData) {
      state.interviewsList.push(interviewData)
    },
    updateCurrentInterview(state, interviewData) {
      updateElement(state.interviewsList, interviewData)
    }
  },
  actions: {
    deleteInterview({commit}, interviewId) {
      commit('deleteInterview', interviewId)
    },
    deleteInterviewWorkerId({commit}, workerId) {
      commit('deleteInterviewWorkerId', workerId)
    },
    deleteInterviewAplicantId({commit}, aplicantId) {
      commit('deleteInterviewAplicantId', aplicantId)
    },
    addNewInterview({commit}, interviewData) {
      commit('addNewInterview', {
        id: new Date().getTime(),
        ...interviewData
      })
    },
    updateCurrentInterview({commit}, interviewData) {
      commit('updateCurrentInterview', interviewData)
    }
  }
}