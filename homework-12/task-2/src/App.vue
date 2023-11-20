<template>
  <div class="main-container">
    <nav class="navigation">
      <router-link :to="{ name: 'home' }" class="navigation__item">Головна</router-link> | <router-link :to="{ name: 'teachers' }"
        class="navigation__item">Вчителі</router-link> | <router-link :to="{ name: 'lessons' }" class="navigation__item">Предмети</router-link> |
      <router-link :to="{ name: 'assignments' }" class="navigation__item">Призначення</router-link>
      <nav class="navigation__auth"> <a href="#" class="auth navigation__item">Вхід</a> / <span>Ім'я користувача</span></nav>
    </nav>
  </div>
  <router-view />
</template>

<style lang="scss">
@import './assets/style/';
</style>
