<template>
  <div class="code">
    <label for="code-input" class="code__label">{{ cardTitles.codeTitle }}</label>
    <div class="code__item">
      <input id="code-input" class="code__input" type="tel" maxlength="3" placeholder="XXX" inputmode="numeric" v-model="cvvCode"
        @keydown="onKeyDown" />
      <img :src="iconsPath.questionLogo" class="code__icon">
    </div>
  </div>
</template>

<script>
import onKeyDown from "@/utils.js";
export default {
  name: "CardCode",
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
      cvvCode: null
    }
  },
  methods: {
    onKeyDown
  },
  watch: {
    cvvCode(newValue) {
      if (newValue) {
        this.cvvCode = this.cvvCode.replace(/\d/g, "*")
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.code {
  display: flex;
  flex-direction: column;
  gap: 10px;

  // .code__label
  &__label {
    font-size: 20px;
    font-weight: 700;
    color: #48494b;
    text-transform: uppercase;
  }

  // .code__item
  &__item {
    max-width: 160px;
    position: relative;
  }

  // .code__input
  &__input {
    width: 100%;
    height: 32px;
    font-size: 20px;
    border-radius: 5px;
    border: 2px solid rgb(75, 98, 216);
    background-color: rgb(239, 240, 174);
    padding-left: 10px;
  }

  // .code__icon
  &__icon {
    position: absolute;
    right: -10px;
    top: 50%;
    transform: translate(0, -50%);
    width: 25px;
  }
}
</style>
