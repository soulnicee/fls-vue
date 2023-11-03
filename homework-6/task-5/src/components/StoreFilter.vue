<template>
  <div class="store">
    <div class="store__title">
      <h3>Продавець</h3>
      <span></span>
    </div>
    <div class="store__filter">
      <div class="store__filter-item" v-for="seller in sellersList" :key="seller.id">
        <label>
          <input type="checkbox" :value="seller.id" v-model="sellerChecked"> {{ seller.name }}</label>
        <span></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StoreFilter',
  props: {
    sellersList: {
      type: Array,
      required: true
    },
    modelValue: {
      type: Array,
      default: () => []
    },
    modelModifiers: {
      default: () => ({})
    }
  },
  emits: ['update:modelValue'],
  computed: {
    sellerChecked: {
      get() {
        return this.modelValue
      },
      set(newVal) {
        this.$emit('update:modelValue', newVal)
      }

    }
  },
}
</script>

<style lang="scss" scoped>
.store {

  // .store__title
  &__title {}

  // .store__filter
  &__filter {
    display: flex;
    flex-direction: column;
  }

  &__filter-item {}
}
</style>