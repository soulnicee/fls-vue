import {  deleteElement, updateElement, getElementById } from "@/store/helpers.js";
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
      dayName: rootGetters['getDayById'](item.dayId)
    })),
  },
  mutations: {
    deleteInterview(state, interviewId) {
      state.interviewsList = deleteElement(state.interviewsList, interviewId)
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