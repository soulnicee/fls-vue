<template>
  <div>
    <label> Система оцінювання <select @change="onChange">
        <option value="12">12</option>
        <option value="5">5</option>
      </select>
    </label>
  </div>
</template>

<script>
export default {
  name: 'ScoreCategory',
  emits: ['selectedValue'],
  methods: {
    onChange(event) {
      const targetValue = event.target.value
      this.$emit('selectedValue', targetValue)
    }
  },
}
</script>

<style lang="scss" scoped></style>