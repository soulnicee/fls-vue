<template>
  <div class="list">
    <div class="item" v-for="product in productList" :key="product.id">
      <div class="item__product">
        <div class="product-name">{{ product.name }}</div>
        <div class="product-price">{{ product.price }}</div>
      </div>
      <div class="item__button">
        <button type="button" class="button" @click="addToCart(product.id)">Купити</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: 'ProductsList',
  computed: {
    ...mapGetters(['productList'])
  },
  methods: {
    ...mapActions(['loadProductsList', 'addToCart'])
  },
  created() {
    this.loadProductsList()
  },
}
</script>

<style lang="scss" scoped>
.list {
  max-width: 300px;
}

.item {
  display: flex;
  gap: 30px;

  &:not(:last-child) {
    margin-bottom: 5px;
  }

  // .item__product
  &__product {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    flex: 1 1 100%;
  }

  // .item__button
  &__button {}
}

.product-name {
  font-size: 18px;
}

.product-price {
  font-size: 18px;
  font-weight: 700;
}

.button {}
</style>