<template>
  <div class="card">
    <div class="card__container">
      <div class="card__number">
        <card-number :card-titles="cardData.titles" :icons-path="cardData.logos" />
      </div>
      <div class="card__detail">
        <card-date :card-titles="cardData.titles" />
        <card-code :card-titles="cardData.titles" :icons-path="cardData.logos" />
      </div>
    </div>
  </div>
</template>

<script>
import { cardData } from "@/constants/carddata.js";
import CardNumber from "@/components/CardNumber.vue";
import CardDate from "@/components/CardDate.vue";
import CardCode from "@/components/CardCode.vue";
export default {
  name: "CreditCard",
  components: {
    CardNumber,
    CardDate,
    CardCode,
  },
  data() {
    return {
      cardData
    }
  },
};
</script>

<style lang="scss" scoped>
.card {
  margin: 0 auto;
  width: 400px;
  padding: 10px;
  background-color: rgb(219, 213, 213);
  border-radius: 10px;

  // .card__container
  &__container {
    padding: 10px;
  }

  // .card__number
  &__number {
    margin-bottom: 10px;
  }

  // .card__detail
  &__detail {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
}
</style>
