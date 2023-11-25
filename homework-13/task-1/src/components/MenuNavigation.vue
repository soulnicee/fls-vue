<template>
  <nav class="nav-menu">
    <div class="nav-menu__items">
      <router-link :to="{ name: 'home' }">Головна</router-link> | <router-link v-if="!isAuth" :to="{ name: 'login' }"
        class="login__enter-btn">Login</router-link> <router-link v-else :to="{ name: 'select_lessons' }">Вчителі</router-link>
    </div>
    <div v-if="isAuth" class="user">
      <div class="user__greetings">Вітаємо, {{ userData.login }}</div>
      <button type="button" class="user__exit-btn" @click="onExit">Exit</button>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';


export default {
  name: 'MenuNavigation',
  computed: {
    ...mapGetters('login', ['userData', 'isAuth'])
  },
  watch: {
    isAuth(newValue) {
      if (newValue) {
        this.$router.push({
          name: 'select_lessons'
        })
      }
    }
  },
  methods: {
    ...mapActions('login', ['setUserData']),
    onExit() {
      this.setUserData({})
      this.$router.push({
        name: 'home'
      })
    }
  },
}
</script>

<style lang="scss" scoped></style>