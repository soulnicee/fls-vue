<template>
  <div class="expiry">
    <label for="expiry-date-input" class="expiry__label">{{ cardTitles.dateTitle }}</label>
    <div class="expiry__item">
      <input ref="inpDateCard" id="expiry-date-input" class="expiry__input" type="tel" maxlength="5" placeholder="MM/YY" inputmode="numeric"
        v-model="cardExpiryDate" @keydown="onKeyDown" @input="changeFocus" />
    </div>
  </div>
</template>

<script>
import onKeyDown from "@/utils.js";
export default {
  name: "CardDate",
  props: {
    cardTitles: {
      type: Object,
    },
    focusChange: {
      type: Boolean
    }
  },
  data() {
    return {
      cardExpiryDate: null
    }
  },
  methods: {
    onKeyDown,
    changeFocus() {
      let length = this.cardExpiryDate.length
      if (length === 5) this.$emit('dateChangeFocus', true)
    }
  },
  watch: {
    cardExpiryDate(newValue, oldValue) {
      console.log(this.cardExpiryDate[0]);
      if (newValue.length === 2 && oldValue.length === 1) this.cardExpiryDate = newValue + '/'
      else if (newValue.length === 2 && oldValue.length === 3) this.cardExpiryDate = newValue[0]
    },
    focusChange(newValue) {
      if (newValue) this.$refs.inpDateCard.focus()
    }
  },
};
</script>

<style lang="scss" scoped>
.expiry {
  display: flex;
  flex-direction: column;
  gap: 10px;

  // .expiry__label
  &__label {
    font-size: 20px;
    font-weight: 700;
    color: #48494b;
    text-transform: uppercase;
  }

  // .expiry__item
  &__item {
    max-width: 160px;
  }

  // .expiry__input
  &__input {
    width: 100%;
    height: 32px;
    font-size: 20px;
    border-radius: 5px;
    border: 2px solid rgb(75, 98, 216);
    background-color: rgb(239, 240, 174);
    padding-left: 10px;
  }
}
</style>
