<template>
  <div class="shop-manager">
    <div class="shop-manager__lists">
      <div class="shop-manager__shop-list">
        <h2 class="shop-manager__list-title">Відділення</h2>
        <shop-list />
      </div>
      <div class="shop-manager__shop-list">
        <h2 class="shop-manager__list-title">Товари</h2>
        <product-list />
      </div>
    </div>
    <button type="button" class="shop-manager__button" @click="addToDistrList">Додати</button>
    <div class="shop-manager__result">
      <h2 class="shop-manager__list-title">Розподіл товарів</h2>
      <goods-distribution-list />
    </div>
  </div>
</template>

<script>
import ShopList from "@/components/ShopList.vue";
import ProductList from "@/components/ProductList.vue";
import GoodsDistributionList from "@/components/GoodsDistributionList.vue";
import { mapGetters, mapActions } from 'vuex';
export default {
  name: "ShopManager",
  components: {
    ShopList,
    ProductList,
    GoodsDistributionList
  },
  computed: {
    ...mapGetters(['choosenShop', 'choosenProduct'])
  },
  methods: {
    ...mapActions(['addToDistrList'])
  },
}
</script>

<style lang="scss" scoped></style>