<template>
  <div v-if="cartList.length" class="list">
    <div class="item" v-for="product in cartList" :key="product.id">
      <div class="item__cart">
        <div class="cart-name">{{ product.name }}</div>
        <div class="cart-price">{{ product.summary }}</div>
        <div class="cart-count">{{ product.count }}</div>
      </div>
      <div class="item__button">
        <button type="button" class="button" @click="deleteFromCart(product)">Відмовитись</button>
      </div>
    </div>
  </div>
  <div v-else class="empty" @click="show">Ви нічого не купили</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: 'CartList',
  computed: {
    ...mapGetters(['cartList'])
  },
  methods: {
    ...mapActions(['deleteFromCart'])
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

  // .item__cart
  &__cart {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    flex: 1 1 100%;
  }

  // .item__button
  &__button {}
}

.cart-name {}

.cart-price {}

.button {}

.empty {}
</style>