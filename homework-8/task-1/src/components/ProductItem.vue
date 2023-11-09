<template>
  <a :href="itemData.url" class="product">
    <div class="product__image">
      <img :src="itemData.imgUrl">
    </div>
    <div class="product__about">
      <div class="product__title">{{ itemData.name }}</div>
      <div class="product__price">{{ itemData.price }} ₴</div>
    </div>
  </a>
  <div></div>
</template>

<script>
export default {
  name: 'ProductItem',
  props: {
    itemData: {
      type: Object,
      required: true
    },
  },
}
</script>

<style lang="scss" scoped>
.product {

  // .product__image
  &__image {
    width: 300px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  // .product__about
  &__about {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  // .product__title
  &__title {
    color: rgb(56, 56, 55);
    font-size: 18px;
    font-weight: 700;
  }

  // .product__price
  &__price {
    color: red;
    font-size: 18px;
    font-weight: 700;
  }
}
</style>