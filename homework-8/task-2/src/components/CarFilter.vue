<template>
  <div class="filter">
    <div class="filter__item">
      <label> Тип транспорта <select @change="updateFilter({ filterName: 'vehicleType', filterValue: $event.target.value })">
          <option :value="0" disabled selected>Оберіть тип транспорту</option>
          <option v-for="carType in vehicleTypes" :key="carType.id" :value="carType.type">{{ carType.name }}</option>
        </select>
      </label>
    </div>
    <div class="filter__item">
      <div v-for="body in carBodyTypes" :key="body.id" class="checkbox"
        @change="updateFilter({ filterName: 'bodyType', filterValue: $event.target.value })">
        <input :id="body.id" class="checkbox__input" type="checkbox" :value="body.type">
        <label :for="body.id" class="checkbox__label"><span class="checkbox__text">{{ body.name }}</span></label>
      </div>
    </div>
    <div class="filter__item">
      <label> Марка <select @change="updateFilter({ filterName: 'brand', filterValue: $event.target.value })">
          <option v-for="brand in carBrand" :key="brand" :value="brand">{{ brand }}</option>
        </select>
      </label>
    </div>
    <div class="filter__item">
      <label> Модель <select @change="updateFilter({ filterName: 'model', filterName: $event.target.value })">
          <option v-for="model in carModel" :key="model" :value="model">{{ model }}</option>
        </select>
      </label>
    </div>
    <div class="filter__item">
      <label> Рік <select @change="updateFilter({ filterName: 'yearFrom', filterValue: $event.target.value })">
          <option :value="0" disabled selected>З ...</option>
          <option v-for="year in fillYears" :key="year" :value="year">{{ year }}</option>
        </select>
        <select @change="updateFilter({ filterName: 'yearTo', filterValue: $event.target.value })">
          <option :value="0" disabled selected>По ...</option>
          <option v-for="year in fillYears.reverse()" :key="year" :value="year">{{ year }}</option>
        </select>
      </label>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: 'CarFilter',
  computed: {
    ...mapGetters(['vehicleTypes', 'carBodyTypes', 'carBrand', 'carModel']),
    fillYears() {
      let yearsList = []
      let startYear = 1950
      let currentYear = 2023
      while (startYear <= currentYear) {
        yearsList.push(startYear)
        startYear++
      }
      return yearsList
    }
  },
  methods: {
    ...mapActions(['updateFilter'])
  },
}
</script>

<style lang="scss" scoped>
.filter {
  display: flex;
  flex-direction: column;
  gap: 20px;

  // .filter__item
  &__item {}
}

.checkbox {

  // .checkbox__input
  &__input {}

  // .checkbox__label
  &__label {}

  // .checkbox__text
  &__text {}
}
</style>