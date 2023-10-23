<template>
  <div class="products">
    <ProductsList :cards-data-list="notebooksList" />
  </div>
</template>

<script>
import ProductsList from "./components/ProductsList.vue";
import { notebooksList } from "./constants/3_data_notebooks.js";

export default {
  name: 'App',
  data() {
    return {
      notebooksList
    };
  },
  components: { ProductsList }
}
</script>

<style></style>
