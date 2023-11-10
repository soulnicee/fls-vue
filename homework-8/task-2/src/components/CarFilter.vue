<template>
  <div class="filter">
    <div class="filter__item">
      <label> Тип транспорта <select>
          <option value="1">Пункт №1</option>
        </select>
      </label>
    </div>
    <div class="filter__item">
      <div class="checkbox">
        <input id="c_1" data-error="Помилка" class="checkbox__input" type="checkbox" value="1" name="form[]">
        <label for="c_1" class="checkbox__label"><span class="checkbox__text">Текст</span></label>
      </div>
    </div>
    <div class="filter__item">
      <label> Марка <select>
          <option value="1">Пункт №1</option>
        </select>
      </label>
    </div>
    <div class="filter__item">
      <label> Модель <select>
          <option value="1">Пункт №1</option>
        </select>
      </label>
    </div>
    <div class="filter__item">
      <label> Рік <select>
          <option value="1">Пункт №1</option>
        </select>
        <select>
          <option value="1">Пункт №1</option>
        </select>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CarFilter'
}
</script>

<style lang="scss" scoped></style>