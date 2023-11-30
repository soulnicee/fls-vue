<template>
  <div class="card">
    <div class="card__container">
      <div class="card__picture">
        <img :src="cardData.imageSrc" class="card__image">
      </div>
      <div class="card__title">{{ cardData.title }}</div>
      <div class="card__about">
        <slot>
          <div class="card__price">{{ cardData.price }} грн.</div>
        </slot>
      </div>
      <button type="button" class="card__button">Купити</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardItem',
  props: {
    cardData: {
      type: Object,
      required: true
    },
  },
}
</script>

<style lang="scss" scoped></style>