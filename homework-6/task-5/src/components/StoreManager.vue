<template>
  <div class="container">
    <div class="container__item">
      <products-filter />
    </div>
    <div class="container__item">
      <products-list />
    </div>
  </div>
</template>
<script>
import ProductsList from "@/components/ProductsList.vue";
import ProductsFilter from "@/components/ProductsFilter.vue";
export default {
  name: "StoreManager",
  components: {
    ProductsList,
    ProductsFilter
  },
};
</script>

<style lang="scss">
.container {
  display: grid;
  grid-template-columns: 15% 85%;
  gap: 25px;
  padding: 0px 200px;
}
</style>
