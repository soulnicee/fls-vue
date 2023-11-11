<template>
  <div class="car">
    <a :href="carData.link" class="car__image">
      <img :src="carData.srcImg">
    </a>
    <div class="car__content">
      <a :href="carData.link" class="car__title">{{ carData.title }}</a>
      <div class="car__about">Тут може бути ваша реклама :)</div>
      <div class="car__price">{{ carData.price }} $</div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'CarItem',
  props: {
    carData: {
      type: Object,
      required: true
    },
  },
}
</script>

<style lang="scss" scoped>
.car {
  display: flex;
  gap: 10px;
  border: 1px solid #000;

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  // .car__image
  &__image {
    width: 250px;
    overflow: hidden;

    img {
      height: auto;
      width: 100%;
      display: block;
      margin: 0 auto;
    }
  }

  // .car__content
  &__content {
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 10px;
  }

  // .car__title
  &__title {
    font-size: 18px;
    color: rgb(69, 69, 161);
  }

  // .car__about
  &__about {
    font-size: 16px;
    color: grey;
  }

  // .car__price
  &__price {
    font-size: 20px;
    color: rgb(30, 185, 37);
  }
}
</style>