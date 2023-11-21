import { createStore } from "vuex"
import workers from "./modules/workers.js"
import aplicants from "./modules/aplicants.js"
import interviews from "./modules/interviews.js"
import { aplicantsList } from "@/data/aplicants.js";
import { professionsList } from "@/data/professions.js";
import { daysList } from "@/data/days.js";
export default createStore({
  state: {},
  getters: {
    aplicantsList: () => aplicantsList,
    professionsList: () => professionsList,
    daysList: () => daysList,
    getProffesionById:(state, getters) => (profId) => getters.professionsList.find((item) => item.id == profId).name
  },
  mutations: {},
  actions: {},
  modules: {
    workers,
    aplicants,
    interviews
  },
});
