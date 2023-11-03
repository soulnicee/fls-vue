<template>
  <div class="card-number">
    <label for="card-number-input" class="card-number__label">Card number</label>
    <div class="card-number__item">
      <input id="card-number-input" class="card-number__input" type="tel" maxlength="23" placeholder="XXXX XXXX XXXX XXXX" inputmode="numeric" />
      <img src="" class="card-number__icon" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "CardNumber",
};
</script>

<style lang="scss" scoped>
.card-number {
  display: flex;
  flex-direction: column;
  gap: 10px;

  // .card-number__label
  &__label {
    font-size: 24px;
    font-weight: 700;
    color: #071438;
  }

  // .card-number__item
  &__item {
    max-width: 320px;
  }

  // .card-number__input
  &__input {
    width: 100%;
    height: 32px;
    font-size: 22px;
    border-radius: 5px;
    border: 2px solid rgb(75, 98, 216);
    background-color: rgb(239, 240, 174);
  }

  // .card-number__icon
  &__icon {}
}
</style>
