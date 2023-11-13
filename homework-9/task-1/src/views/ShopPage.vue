<template>
  <div class="shop">
    <h3 class="shop__title">Список товарів</h3>
    <ul class="shop__list">
      <li v-for="category in productCategory" :key="category.id" class="shop__item">{{ category.name }}</li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: 'ShopPage',
  computed: {
    ...mapGetters(['productCategory'])
  },
  methods: {
    ...mapActions(['loadProductCategory'])
  },
  created() {
    this.loadProductCategory()
  },
}
</script>

<style lang="scss" scoped></style>