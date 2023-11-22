import { createStore } from "vuex"
import workers from "@/store/modules/workers.js"
import aplicants from "@/store/modules/aplicants.js"
import interviews from "@/store/modules/interviews.js"
import { professionsList } from "@/data/professions.js";
import { daysList } from "@/data/days.js";
export default createStore({
  state: {},
  getters: {
    professionsList: () => professionsList,
    daysList: () => daysList,
    getProfessionById:(state, getters) => (profId) => getters.professionsList.find((item) => item.id == profId).name,
    getDayById:(state, getters)=> (dayId) => getters.daysList.find((item) => item.id == dayId).name
  },
  mutations: {},
  actions: {},
  modules: {
    workers,
    aplicants,
    interviews
  },
});
