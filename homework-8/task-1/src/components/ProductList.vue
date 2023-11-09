<template>
  <template v-if="productList.length">
    <div class="container">
      <product-item v-for="product in productList" :key="product.id" :item-data="product" />
    </div>
  </template>
  <div v-else class="emty-list">Зробіть свій вибій</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ProductItem from "@/components/ProductItem.vue";
export default {
  name: 'ProductList',
  components: {
    ProductItem,
  },
  computed: {
    ...mapGetters(['productList'])
  },
  methods: {
    ...mapActions(['loadProductList'])
  },
  created() {
    this.loadProductList()
  },
}
</script>

<style lang="scss" scoped>
.emty-list {
  text-align: center;
  font-size: 24px;
  color: red;
  padding: 20px;
  border: 2px dotted dodgerblue;
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
}
</style>