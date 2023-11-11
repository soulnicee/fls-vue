<template>
  <car-manager />
</template>

<script>
import { mapActions } from "vuex";
import CarManager from "@/components/CarManager.vue";
export default {
  name: "App",
  components: {
    CarManager,
  },
  methods: {
    ...mapActions(['loadCarList', 'loadVehicleTypes', 'loadCarBodyTypes', 'loadTruckBodyTypes'])
  },
  created() {
    this.loadCarList(),
      this.loadVehicleTypes(),
      this.loadCarBodyTypes(),
      this.loadTruckBodyTypes()
  },
};
</script>

<style lang="scss"></style>
