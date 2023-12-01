<template>
  <div>
    <nav>
      <router-link :to="{ name: 'home' }">Головна</router-link> | <router-link :to="{ name: 'products' }">Товари</router-link> | <router-link
        :to="{ name: 'vendors' }">Постачальники</router-link> | <router-link :to="{ name: 'contacts' }">Контакти</router-link> | <router-link
        :to="{ name: 'shopping-rules' }">Правила купівлі</router-link>
    </nav>
  </div>
  <slot name="title">
    <h1 class="title">Вітаємо!</h1>
  </slot>
  <slot></slot>
  <div class="bottom">
    <slot name="ranking">
      <div class="bottom__item"> Рейтинг магазину: 54449 </div>
    </slot>
    <slot name="status">
      <div class="bottom__item"> Статус: відкрито </div>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'MainMasterPage'
}
</script>

<style lang="scss" scoped>
.title {}

.bottom {
  display: flex;
  gap: 20px;

  // .bottom__item
  &__item {}
}
</style>