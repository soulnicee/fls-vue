<template>
  <div class="main-container">
    <menu-navigation />
    <router-view />
  </div>
</template>
<script>
import MenuNavigation from "@/components/MenuNavigation.vue";
export default {
  name: 'App',
  components: {
    MenuNavigation,
  },
}
</script>
<style lang="scss">
@import '@/assets/styles/index.scss';
</style>
