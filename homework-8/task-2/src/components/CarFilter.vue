<template>
  <div class="filter">
    <div class="filter__item">
      <label> Тип транспорта <select>
          <option :value="0" disabled selected>Оберіть тип транспорту</option>
          <option v-for="carType in vehicleTypes" :key="carType.id" :value="carType.id">{{ carType.name }}</option>
        </select>
      </label>
    </div>
    <div class="filter__item">
      <div v-for="body in carBodyTypes" :key="body.id" class="checkbox">
        <input :id="body.id" class="checkbox__input" type="checkbox" value="1">
        <label :for="body.id" class="checkbox__label"><span class="checkbox__text">{{ body.name }}</span></label>
      </div>
    </div>
    <div class="filter__item">
      <label> Марка <select>
          <option v-for="brand in carBrand" :key="brand" value="1">{{ brand }}</option>
        </select>
      </label>
    </div>
    <div class="filter__item">
      <label> Модель <select>
          <option v-for="model in carModel" :key="model" value="1">{{ model }}</option>
        </select>
      </label>
    </div>
    <div class="filter__item">
      <label> Рік <select>
          <option v-for="year in fillYears" :key="year" value="1">{{ year }}</option>
        </select>
        <select>
          <option :value="0" disabled selected>По</option>
          <option v-for="year in fillYears.reverse()" :key="year" value="1">{{ year }}</option>
        </select>
      </label>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: 'CarFilter',
  computed: {
    ...mapGetters(['vehicleTypes', 'carBodyTypes', 'truckBodyTypes', 'carBrand', 'carModel']),
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