import { createStore } from "vuex";
import { shopsList, productsList } from "@/constants/12_shops.js";
const store =  createStore({
  state: {
      shopsList, 
      productsList,
      goodsDistributionList: [],
      choosenShop: null,
      choosenProduct: []
  },
  getters: {
    shopsList: ({shopsList}) => shopsList,
    productsList: ({productsList}) => productsList,
    goodsDistributionList: ({goodsDistributionList}) => goodsDistributionList,
    choosenShop: ({choosenShop}) => choosenShop,
    choosenProduct: ({choosenProduct}) => choosenProduct,
  },
  mutations: {
choosenShopChanges(state, shopId) {
  if (shopId === state.choosenShop) state.choosenShop = null
  else state.choosenShop = shopId
},
choosenProductChanges(state, product) {
  state.choosenProduct.push(product.name)
  console.log(state.choosenProduct);
},
distributionListChanges(state) {
  if (!state.choosenShop || !state.choosenProduct.length) return
  let shop = state.shopsList.find((item) => item.id === state.choosenShop)
  state.goodsDistributionList.push(
    {
      id: new Date().getTime(),
      shopName:shop.name,
        goods: state.choosenProduct
    }
  )
  state.choosenShop = null
  state.choosenProduct = []
}
  },
  actions: {
    onShopChoose({commit}, shopId) {
      commit('choosenShopChanges', shopId)
    },
    onProductChoose({commit}, product) {
      commit('choosenProductChanges', product)
    },
    addToDistrList({commit}) {
       commit('distributionListChanges')
    }
  },
  modules: {},
});
export default store