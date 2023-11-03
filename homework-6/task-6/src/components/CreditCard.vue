<template>
  <div class="card">
    <div class="card__container">
      <div class="card__number">
        <card-number />
      </div>
      <div class="card__detail">
        <card-date />
        <card-code />
      </div>
    </div>
  </div>
</template>

<script>
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
};
</script>

<style lang="scss" scoped>
.card {
  margin: 0 auto;
  width: 600px;

  // .card__container
  &__container {
    padding: 10px;
  }

  // .card__number
  &__number {}

  // .card__detail
  &__detail {}
}
</style>
