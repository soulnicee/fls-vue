<template>
  <div class="manager">
    <h1 class="manager__title">Вітаємо в нашому магазині!</h1>
    <div class="manager__lists">
      <div class="manager__products products">
        <h2 class="products__title">Список Товарів</h2>
        <products-list />
      </div>
      <div class="manager__cart cart">
        <h2 class="cart__title">Корзина</h2>
        <cart-list />
      </div>
      <div class="manager__currency currency">
        <div class="currency__select">
          <h2 class="currency__title">Валюта</h2>
          <currency-changer />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductsList from '@/components/ProductsList.vue';
import CartList from '@/components/CartList.vue';
import CurrencyChanger from '@/components/CurrencyChanger.vue';

export default {
  name: 'StoreManager',
  components: {
    ProductsList,
    CartList,
    CurrencyChanger
  },
}
</script>

<style lang="scss" scoped>
.manager {
  padding: 20px 150px 0 250px;

  // .manager__title
  &__title {
    text-align: center;
  }

  // .manager__lists
  &__lists {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  // .manager__products
  &__products {}

  // .manager__cart
  &__cart {}

  // .manager__currency
  &__currency {}
}

.products {

  // .products__title
  &__title {}
}

.cart {

  // .cart__title
  &__title {}
}

.currency {

  // .currency__select
  &__select {}
}
</style>