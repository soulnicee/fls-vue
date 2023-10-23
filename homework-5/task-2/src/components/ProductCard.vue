<template>
  <div class="card__container">
    <div class="card__picture">
      <img :src="cardData.imgSrc" class="card__image">
    </div>
    <div class="card__seller-info">
      <div class="card__seller">
        <img :src="cardData.logo" alt="" class="card__seller-logo">
        <div class="card__seller-name">{{ cardData.companyTitle }}</div>
        <div class="card__seller-avaliable" v-if="cardData.avaliable">В наявності</div>
      </div>
    </div>
    <div class="card__product-info">{{ cardData.description }}</div>
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
.card__container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.card__picture {
  width: 250px;
  height: 250px;
}

.card__image {
  border-radius: 10px;
  width: 100%;
  height: 100%;
}

.card__seller-info {}

.card__seller {
  display: flex;
  gap: 5px;
  align-items: center;
}

.card__seller-logo {
  width: 20px;
  height: 20px;
}

.card__seller-name {
  color: #000;
  font-size: 16px;
  font-weight: 700;
}

.card__seller-avaliable {
  font-size: 18px;
  color: green;
}
</style>