import { updateElement, transformElementsListByProfessionId, getElementById, deleteElement } from "@/store/helpers.js";
export default {
  namespaced: true,
  state: {
    workersList: [
      { id: 2, name: 'Іван Жартовий', professionId: 1, experience: 3 },
      { id: 3, name: 'Петро Смішненький', professionId: 2, experience: 5 },
      { id: 4, name: 'Сергій Ржавенький', professionId: 3, experience: 2 },
      { id: 5, name: 'Костянтин Куркулятор', professionId: 4, experience: 4 },
      { id: 6, name: 'Святослав Смішлявий', professionId: 5, experience: 6 },
      { id: 7, name: 'Федір Фантастичний', professionId: 6, experience: 8 },
      { id: 1, name: 'Олександр Сміхотун', professionId: 7, experience: 1 },
      { id: 8, name: 'Артем Анекдотичний', professionId: 8, experience: 7 },
      { id: 9, name: 'Назар Незабаром', professionId: 9, experience: 3 },
      { id: 10, name: 'Кирило Комічний', professionId: 10, experience: 5 },
      { id: 11, name: 'Микола Маразматичний', professionId: 11, experience: 2 },
      { id: 12, name: 'Олесь Оптимістичний', professionId: 12, experience: 4 },
      { id: 13, name: 'Богдан Безглуздий', professionId: 13, experience: 6 },
      { id: 14, name: 'Кирило Кумедний', professionId: 14, experience: 8 },
      { id: 15, name: 'Леонід Легендарний', professionId: 15, experience: 1 }
    ]
  },
  getters: {
    workersList:({workersList}) => workersList,
    transformedWorkersList:(state, getters, rootState, rootGetters) => transformElementsListByProfessionId(getters.workersList, rootGetters['getProfessionById']),
    getWorkerById:(state, getters)=> (workerId) => getElementById(getters.transformedWorkersList, workerId)
  },
  mutations: {
    deleteWorker(state, workerId) {
      state.workersList = deleteElement(state.workersList, workerId)
    },
    addNewWorker(state, workerData) {
      state.workersList.push(workerData)
    },
    updateCurrentWorker(state, workerData) {
      updateElement(state.workersList, workerData)
    }
  },
  actions: {
    deleteWorker({commit}, workerId) {
      commit('deleteWorker', workerId)
    },
    addNewWorker({commit}, workerData) {
      commit('addNewWorker', {
        id: new Date().getTime(),
        ...workerData
      })
    },
    updateCurrentWorker({commit}, workerData) {
      commit('updateCurrentWorker', workerData)
    }
  }
}