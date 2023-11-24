<template>
  <nav class="nav-menu">
    <router-link :to="{ name: 'home' }">Головна</router-link> | <router-link :to="{ name: 'login' }">Уроки</router-link>
  </nav>
  <nav class="nav-login">
  </nav>
  <router-view />
</template>

<style lang="scss">
@import '@/assets/styles/index.scss';
</style>
