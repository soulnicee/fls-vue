import { createStore } from "vuex";
import products from "@/store/modules/products.js";
import vendors from "@/store/modules/vendors.js";
import contacts from "@/store/modules/contacts.js";
export default createStore({
  state: {
    gallery: [
      {
        id: 1,
        link: `https://picsum.photos/250/250`
      },
      {
        id: 2,
        link: 'https://picsum.photos/250/250'
      },
      {
        id: 3,
        link: 'https://picsum.photos/250/250'
      },
      {
        id: 4,
        link: 'https://picsum.photos/250/250'
      },
    ]
  },
  getters: {
    gallery: ({gallery}) => gallery
  },
  mutations: {},
  actions: {},
  modules: {
    products,
    vendors,
    contacts
  },
});
