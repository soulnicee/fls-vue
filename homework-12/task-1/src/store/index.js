import { createStore } from "vuex"
import workers from "./modules/workers.js"
import aplicants from "./modules/aplicants.js"
import interviews from "./modules/interviews.js"
export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    workers,
    aplicants,
    interviews
  },
});
