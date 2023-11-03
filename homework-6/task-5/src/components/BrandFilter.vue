<template>
  <div class="brand">
    <div class="brand__title">
      <h3>Бренд</h3>
      <span></span>
    </div>
    <div class="brand__filter">
      <div class="brand__filter-item" v-for="brand in brandsList" :key="brand.id">
        <label>
          <input type="checkbox" :value="brand" v-model="brandChecked"> {{ brand.name }}</label>
        <span></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BrandFilter',
  props: {
    brandsList: {
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
    brandChecked: {
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

<style lang="scss" scoped></style>