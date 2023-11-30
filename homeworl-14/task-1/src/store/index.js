import { createStore } from "vuex";
import products from "@/store/modules/products.js";
import vendors from "@/store/modules/vendors.js";
export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    products,
    vendors
  },
});
