<template>
  <nav>
    <router-link :to="{ name: 'home' }">Головна</router-link> | <router-link :to="{ name: 'workers' }">Працівники</router-link> | <router-link
      :to="{ name: 'aplicants' }">Кандидати</router-link> | <router-link :to="{ name: 'interviews' }">Співбесіди</router-link> |
  </nav>
  <router-view />
</template>

<style lang="scss">
@import './assets//styles/';
</style>
