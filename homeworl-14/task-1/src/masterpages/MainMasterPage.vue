<template>
  <div>
    <nav>
      <router-link :to="{ name: 'home' }">Головна</router-link> | <router-link :to="{ name: 'products' }">Товари</router-link> | <router-link
        :to="{ name: 'vendors' }">Постачальники</router-link> | <router-link :to="{ name: 'contacts' }">Контакти</router-link> | <router-link
        :to="{ name: 'shopping-rules' }">Правила купівлі</router-link>
    </nav>
  </div>
  <slot></slot>
</template>

<script>
export default {
  name: 'MainMasterPage'
}
</script>

<style lang="scss" scoped></style>