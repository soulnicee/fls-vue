<template>
  <div class="manager">
    <car-filter />
    <car-list />
  </div>
</template>

<script>
import CarList from "@/components/CarList.vue";
import CarFilter from "@/components/CarFilter.vue";
export default {
  name: 'CarManager',
  components: {
    CarList,
    CarFilter
  },
}
</script>

<style lang="scss" scoped>
.manager {
  display: grid;
  gap: 30px;
  grid-template-columns: 20% 80%;
  justify-content: center;
  padding: 10px 300px;
}
</style>