<template>
  <nav>
    <router-link :to="{ name: 'home' }">Головна</router-link> | <router-link :to="{ name: 'products' }">Товари</router-link> | <router-link
      :to="{ name: 'vendors' }">Постачальники</router-link> | <!-- <router-link :to="{ name: 'contacts' }">Контакти</router-link> | 
      <router-link :to="{ name: 'shopping-rules' }">Правила купівлі</router-link> -->
  </nav>
  <router-view />
</template>

<style lang="scss">
@import '@/assets/styles';
</style>
