<template>
  <div v-if="cartList.length" class="list">
    <div class="item" v-for="product in cartList" :key="product.id">
      <div class="item__cart">
        <div class="cart-name">{{ product.name }}</div>
        <div class="cart-price">{{ product.summary }}</div>
      </div>
      <div class="cart-count">{{ product.count }}шт.</div>
      <div class="item__button">
        <button type="button" class="button" @click="deleteFromCart(product)">Відмовитись</button>
      </div>
    </div>
    <div class="item-summary">
      <div class="item-summary__item">
        <div class="item-summary__title">Разом до оплати</div>
        <div class="item-summary__price">{{ summaryPrice }}</div>
      </div>
      <button type="button" class="item-summary__button" @click="checkOut">Оплатити</button>
    </div>
  </div>
  <div v-else class="empty">Ви нічого не купили</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: 'CartList',
  computed: {
    ...mapGetters(['cartList', 'summaryPrice'])
  },
  methods: {
    ...mapActions(['deleteFromCart', 'checkOut'])
  },
}
</script>

<style lang="scss" scoped>
.list {
  max-width: 350px;
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

.cart-name {
  font-size: 18px;
}

.cart-price {
  font-size: 18px;
  font-weight: 700;
}

.button {}

.empty {}


.item-summary {
  display: flex;
  gap: 30px;

  &:not(:last-child) {
    margin-bottom: 5px;
  }

  // .item-summary__item
  &__item {

    display: flex;
    justify-content: space-between;
    gap: 20px;
    flex: 1 1 100%;
  }

  // .item-summary__title
  &__title {
    font-size: 18px;
  }

  // .item-summary__price
  &__price {
    font-size: 18px;
    font-weight: 700;
  }

  // .item-summary__button
  &__button {}
}
</style>