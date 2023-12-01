<template>
  <div class="filter">
    <div class="filter__item">
      <label> Фільтруй <input v-model="inputValue" type="text" class="input">
      </label>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';


export default {
  name: 'SelectorView',
  computed: {
    ...mapGetters('products', ['getInputValue']),
    inputValue: {
      get() {
        return this.getInputValue
      },
      set(newValue) {
        return this.setNewInputValue(newValue)
      }
    }
  },
  methods: {
    ...mapActions('products', ['setNewInputValue'])
  },
}
</script>

<style lang="scss" scoped></style>