<template>
  <div class="card-number">
    <label for="card-number-input" class="card-number__label">{{ cardTitles.numberTitle }}</label>
    <div class="card-number__item">
      <input id="card-number-input" class="card-number__input" type="tel" maxlength="19" placeholder="XXXX XXXX XXXX XXXX" inputmode="numeric"
        v-model="cardNumber" @keydown="onKeyDown" />
      <img :src="iconPath" class="card-number__icon">
    </div>
  </div>
</template>

<script>
import onKeyDown from "@/utils.js";
export default {
  name: "CardNumber",
  props: {
    cardTitles: {
      type: Object,
    },
    iconsPath: {
      type: Object,
    },
  },
  data() {
    return {
      cardNumber: null
    }
  },
  computed: {
    iconPath() {
      if (!this.cardNumber) return
      const firstDigit = this.cardNumber[0]
      let path
      switch (firstDigit) {
        case '3': path = this.iconsPath.express
          break;
        case '4': path = this.iconsPath.visaLogo
          break;
        case '5': path = this.iconsPath.masterLogo
          break;
        case '6': path = this.iconsPath.discover
          break;
        default: path = ''
          break;
      }
      return path
    }
  },
  methods: {
    onKeyDown
  },
  watch: {
    cardNumber(newValue) {
      // newValue = newValue.replace(/\s/g, '');
      // const formattedNumber = [...newValue].reduce((acc, char, index) => {
      //   if (index > 0 && index % 4 === 0) {
      //     return acc + ' ' + char;
      //   }
      //   return acc + char;
      // }, '');
      // this.cardNumber = formattedNumber;

      newValue = newValue.replace(/\s/g, '').match(/.{1,4}/g)
      if (newValue) this.cardNumber = newValue.join(' ')
      else this.cardNumber = ''
    }
  },
};
</script>

<style lang="scss" scoped>
.card-number {
  display: flex;
  flex-direction: column;
  gap: 10px;

  // .card-number__label
  &__label {
    font-size: 20px;
    font-weight: 700;
    color: #48494b;
    text-transform: uppercase;
  }

  // .card-number__item
  &__item {
    max-width: 360px;
    position: relative;
  }

  // .card-number__input
  &__input {
    width: 100%;
    height: 32px;
    font-size: 20px;
    border-radius: 5px;
    border: 2px solid rgb(75, 98, 216);
    background-color: rgb(239, 240, 174);
    padding-left: 10px;
  }

  // .card-number__icon
  &__icon {
    position: absolute;
    right: -5px;
    top: 50%;
    transform: translate(0, -50%);
    width: 40px;
  }
}
</style>
