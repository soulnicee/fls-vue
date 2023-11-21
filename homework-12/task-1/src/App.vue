<template>
  <nav>
    <router-link to="/">Головна</router-link> | <router-link to="/workers">Працівники</router-link> | <router-link
      to="/applicants">Кандидати</router-link> | <router-link to="/interviews">Співбесіди</router-link> |
  </nav>
  <router-view />
</template>

<style lang="scss">
@import './assets//styles/';
</style>
