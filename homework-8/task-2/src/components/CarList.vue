<template>
  <div class="car-list">
    <car-item v-for="car in filteredCarsList" :key="car.id" :car-data="car" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CarItem from "@/components/CarItem.vue";
export default {
  name: 'CarList',
  components: {
    CarItem,
  },
  computed: {
    ...mapGetters(['carsList', 'filteredCarsList'])
  },
}
</script>

<style lang="scss" scoped>
.car-list {
  max-width: 600px;
}
</style>