<template>
  <div class="list">
    <product-card v-for="card in cardsListData" :key="card.id" :card-data="card" />
  </div>
</template>

<script>
import ProductCard from './ProductCard';


export default {
  name: 'ProductList',
  props: {
    cardsListData: {
      type: Array,
      default: () => []
    },
  },
  components: {
    ProductCard
  },
}
</script>

<style lang="css" scoped>
.list {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;
  background-color: #b8b8b8;
}
</style>