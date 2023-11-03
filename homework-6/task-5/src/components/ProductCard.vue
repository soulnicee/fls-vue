<template>
  <a :href="cardData.href" class="card">
    <div class="card__image">
      <img :src="cardData.src" alt="notebook">
    </div>
    <h2 class="card__title">{{ cardData.title }}</h2>
    <div class="card__price">{{ cardData.price }}$</div>
  </a>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    cardData: {
      type: Object,
      required: true
    },
  },
}
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;

  // .card__image
  &__image {
    max-width: 300px;

    img {
      width: 100%;
    }
  }

  // .card__title
  &__title {
    font-size: 16px;
    max-width: 300px;
    text-align: center;
  }

  // .card__price
  &__price {
    // align-self: flex-start;
    font-size: 24px;
    color: red;
  }
}
</style>