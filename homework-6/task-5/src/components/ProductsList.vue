<template>
  <div class="list__container">
    <product-card v-for="card in filteredNotebooksList" :key="card.id" :cardData="card" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ProductCard from '@/components/ProductCard.vue';
export default {
  name: 'ProductsList',
  components: {
    ProductCard,
  },
  computed: {
    ...mapGetters(['notebooksList', 'filteredNotebooksList']),
  },
  methods: {
    ...mapActions(['loadNotebooksList'])
  },
  created() {
    this.loadNotebooksList()
  },
}
</script>

<style lang="scss" scoped>
.list {

  // .list__container
  &__container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>