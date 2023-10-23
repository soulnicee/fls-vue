<template>
  <div class="card">
    <div class="card__image">
      <img :src="cardData.imgSrc">
    </div>
    <div class="card__info">
      <a :href="cardData.link" class="card__title">{{ cardData.title }}</a>
      <div class="card__discount">Ваша економія: <span>{{ cardData.discount }} ₴</span></div>
      <div class="card__old-price">{{ cardData.oldPrice }}₴</div>
      <div class="card__price">{{ cardData.price }}₴</div>
      <button type="button" class="card__button">Купити</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    cardData: {
      type: Object,
      default: () => ({})
    },
  },
}
</script>

<style lang="css" scoped>
.card {
  display: flex;
  gap: 30px;
  align-items: center;
  padding: 20px 5px;
  border-bottom: 1px solid #000;
  max-width: 800px;
}

.card__image {
  flex: 1 0 35%;
  width: 350px;
  height: 250px;
}

.card__image img {
  width: 100%;
  height: 100%;
}

.card__old-price {
  text-decoration: line-through;
  color: rgba(128, 128, 128, 0.719);
  font-size: 18px;
}

.card__price {
  color: red;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 10px;
}

.card__discount {
  font-size: 15px;
  margin-bottom: 5px;
}

.card__discount span {
  color: red;
}

.card__info {
  flex: 1 0 50%;
  display: flex;
  flex-direction: column;
}

.card__button {
  align-self: flex-end;
  padding: 5px;
  background-color: green;
  color: #fff;
  cursor: pointer;
}

.card__title {
  margin-bottom: 10px;
}
</style>