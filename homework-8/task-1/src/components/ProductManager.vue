<template>
  <div class="filter">
    <product-filter />
  </div>
  <product-list />
</template>

<script>
import ProductFilter from "@/components/ProductFilter.vue";
import ProductList from "@/components/ProductList.vue";
export default {
  name: 'ProductManager',
  components: {
    ProductFilter,
    ProductList
  },
}
</script>

<style lang="scss" scoped>
.filter {
  &:not(:last-child) {
    margin-bottom: 20px;
  }
}
</style>