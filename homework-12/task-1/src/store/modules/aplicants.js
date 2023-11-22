import { updateElement, transformElementsListByProfessionId, getElementById, deleteElement } from "@/store/helpers.js";
export default {
  namespaced: true,
  state: {
    aplicantsList: [
      { id: 1, name: 'Куськусь А.В.', professionId: 1, experience: 3 },
      { id: 2, name: 'Іваненко І.І.', professionId: 2, experience: 3 },
      { id: 3, name: 'Петренко П.П.', professionId: 3, experience: 3 },
      { id: 4, name: 'Сидоренко С.С.', professionId: 4, experience: 3 },
      { id: 5, name: 'Кузнецов К.К.', professionId: 5, experience: 3 },
      { id: 6, name: 'Смирнов С.В.', professionId: 6, experience: 3 },
      { id: 7, name: 'Федоров Ф.А.', professionId: 7, experience: 3 },
      { id: 8, name: 'Алексєєв А.А.', professionId: 8, experience: 3 },
      { id: 9, name: 'Нікітін Н.Н.', professionId: 9, experience: 3 },
      { id: 10, name: 'Коваленко К.В.', professionId: 10, experience: 3 },
      { id: 11, name: 'Морозов М.М.', professionId: 11, experience: 3 },
      { id: 12, name: 'Орлов О.О.', professionId: 12, experience: 3 },
      { id: 13, name: 'Богданов Б.Б.', professionId: 13, experience: 3 },
      { id: 14, name: 'Красненко К.А.', professionId: 14, experience: 3 },
      { id: 15, name: 'Лебедєв Л.Л.', professionId: 15, experience: 3 }
    ]
  },
  getters: {
    aplicantsList:({aplicantsList}) => aplicantsList,
    transformedAplicantsList:(state, getters, rootState, rootGetters) => transformElementsListByProfessionId(getters['aplicantsList'], rootGetters['getProfessionById']),
    getAplicantById:(state, getters)=> (aplicantId) => getElementById(getters.transformedAplicantsList, aplicantId)
  },
  mutations: {
    deleteAplicant(state, aplicantId) {
      state.aplicantsList = deleteElement(state.aplicantsList, aplicantId)
    },
    addNewAplicant(state, aplicantData) {
      state.aplicantsList.push(aplicantData)
    },
    updateCurrentAplicant(state, aplicantData) {
      updateElement(state.aplicantsList, aplicantData)
    }
  },
  actions: {
    deleteAplicant({commit}, aplicantId) {
      commit('deleteAplicant', aplicantId)
    },
    addNewAplicant({commit}, aplicantData) {
      commit('addNewAplicant', {
        id: new Date().getTime(),
        ...aplicantData
      })
    },
    updateCurrentAplicant({commit}, aplicantData) {
      commit('updateCurrentAplicant', aplicantData)
    }
  }
}