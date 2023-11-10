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
    ...mapActions(['loadCarList'])
  },
  created() {
    this.loadCarList()
  },
};
</script>

<style lang="scss"></style>
