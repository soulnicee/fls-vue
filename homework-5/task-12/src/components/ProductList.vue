<template>
  <div class="list">
    <div class="list__empty" v-if="!productsList.length">Список порожній</div>
    <product-item v-else v-for="product in productsList" :key="product.id" :product-item="product" :choosen-product="choosenProduct"
      @choose-product="onProductChoose" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import ProductItem from "@/components/ProductItem.vue";
export default {
  name: 'ProductList',
  components: {
    ProductItem,
  },
  computed: {
    ...mapGetters(['productsList', 'choosenProduct'])
  },
  methods: {
    ...mapActions(['onProductChoose'])
  },
}
</script>

<style lang="scss" scoped></style>