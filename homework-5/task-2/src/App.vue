<template>
  <product-list :cards-list-data="raspberryList" />
</template>

<script>
import ProductList from '@/components/ProductList.vue';
import { raspberryList } from "./constants/2_data_raspberry";
export default {
  name: 'App',
  components: {
    ProductList
  },
  data() {
    return {
      raspberryList
    }
  },
}
</script>

<style></style>
