<template>
  <div class="manager">
    <h1 class="manager__title"></h1>
    <div class="manager__lists">
      <div class="manager__products products">
        <h2 class="products__title"></h2>
        <div class="products__list">
          <products-list />
        </div>
      </div>
      <div class="manager__cart cart">
        <h2 class="cart__title"></h2>
        <div class="cart__list">
          <cart-list />
        </div>
      </div>
    </div>
    <div class="manager__currency currency">
      <div class="currency__select">
        <currency-changer />
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

<style lang="scss" scoped></style>