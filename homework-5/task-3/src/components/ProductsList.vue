<template>
  <div class="list">
    <product-card v-for="card in cardsDataList" :key="card.id" :card-data="card" />
  </div>
</template>

<script>
import ProductCard from './ProductCard.vue';
export default {
  name: 'ProductsList',
  components: {
    ProductCard,
  },
  props: {
    cardsDataList: {
      type: Array,
      default: () => []
    },
  },
}
</script>

<style lang="css" scoped>
.list {
  display: flex;
  flex-direction: column;
}
</style>