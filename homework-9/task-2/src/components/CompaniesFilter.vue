<template>
  <div class="title">Filter</div>
  <div class="filters">
    <div class="filter">
      <label class="filter__label"> Title <input v-model.lazy="filterObj.title" autocomplete="off" type="text" class="filter__input">
      </label>
    </div>
    <div class="filter">
      <label class="filter__label"> Year <input v-model.lazy="filterObj.year" autocomplete="off" type="number" class="filter__input">
      </label>
    </div>
    <div class="filter">
      <label class="filter__label"> Rate <input v-model.lazy="filterObj.taxRate" autocomplete="off" type="number" class="filter__input">
      </label>
    </div>
    <div class="filter">
      <label class="filter__label"> Owner <input v-model.lazy="filterObj.owner" autocomplete="off" type="text" class="filter__input">
      </label>
    </div>
    <button type="button" class="reset-filter" @click="onReset">Reset</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';




export default {
  name: 'CompaniesFilter',
  data() {
    return {
      filterObj: {}
    }
  },
  watch: {
    filterObj: {
      handler(newValue) {
        this.updateFilter(newValue)
      },
      deep: true
    }
  },
  methods: {
    ...mapActions('filter', ['updateFilter']),
    onReset() {
      this.filterObj = {}
    }
  },

}
</script>

<style lang="scss" scoped>
.title {
  font-size: 20px;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
}

.filters {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.filter {

  // .filter__label
  &__label {}

  // .filter__input
  &__input {}
}
</style>