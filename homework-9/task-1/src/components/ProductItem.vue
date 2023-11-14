<template>
  <div class="item">
    <div class="item__image">
      <img :src="itemData.imgUrl">
    </div>
    <div class="item__content">
      <a :href="itemData.url" target="_blank" class="item__title">{{ itemData.name }}</a>
      <div class="item__price">{{ itemData.price }} ₴</div>
    </div>
  </div>
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
.item {
  display: flex;
  border: 1px solid #000;
  align-items: center;

  // .item__image
  &__image {
    width: 150px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  // .item__content
  &__content {}

  // .item__title
  &__title {
    color: rgb(56, 56, 55);
    font-size: 18px;
    font-weight: 700;
  }

  // .item__price
  &__price {
    color: red;
    font-size: 18px;
    font-weight: 700;
  }
}
</style>