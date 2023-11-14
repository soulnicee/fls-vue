<template>
  <div class="product-list">
    <product-item v-for="item in productsList[productCategory]" :key="item" :item-data="item" />
  </div>
  <button type="button" class="button" @click="toMainPage">На головну</button>
</template>

<script>
import ProductItem from "@/components/ProductItem.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: 'ProductPage',
  components: {
    ProductItem,
  },
  computed: {
    ...mapGetters(['productsList']),
    productCategory() {
      return this.$route.params.category
    }
  },
  methods: {
    ...mapActions(['loadProductsList']),
    toMainPage() {
      this.$router.push({
        name: 'home'
      })
    }
  },
  created() {
    this.loadProductsList()
  },
}
</script>

<style lang="scss" scoped>
.product-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin-bottom: 20px;
  padding: 50px 150px;
}
</style>