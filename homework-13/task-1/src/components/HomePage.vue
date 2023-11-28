<template>
  <div class="home">
    <h1 class="home__title">{{ title }}</h1>
    <div class="home__text">У нашій школі учень сам вибирає уроки і вчителів</div>
    <div class="home__text">{{ text }}</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: 'HomePage',
  computed: {
    ...mapGetters(['isAuth', 'userData']),
    title() {
      return this.isAuth ? `${this.userData.login}, вітаємо на сайті школи!` : 'Вітаємо на сайті школи!'
    },
    text() {
      return this.isAuth ? `Дякуємо за користуванням нашим сайтом` : 'Увійдіть для повноцінного використання'
    }
  },
}
</script>

<style lang="scss" scoped></style>