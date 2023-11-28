<template>
  <div class="login">
    <h1 class="login__title">Авторизація</h1>
    <div v-if="error" class="login__error">Заповніть поля</div>
    <div class="login__items">
      <div class="login__item">
        <label for="login-name">Введіть логін</label>
        <input id="login-name" v-model="userData.login" autocomplete="off" type="text" class="login__input">
      </div>
      <div class="login__item">
        <label for="login-pass">Введіть пароль</label>
        <input id="login-pass" v-model="userData.password" autocomplete="off" type="password" class="login__input">
      </div>
    </div>
    <button type="button" class="login__btn" @click="onUserAuth">Авторизуватися</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: 'LoginPage',
  data() {
    return {
      userData: {
        login: '',
        password: ''
      },
      error: false
    }
  },
  methods: {
    ...mapActions('login', ['setUserData']),
    isDataFilled(userData) {
      return userData.login && userData.password ? true : false
    },
    genereteError() {
      this.error = true
      setTimeout(() => {
        this.error = false
      }, 5000);
    },
    onUserAuth() {
      this.isDataFilled(this.userData) ? this.setUserData(this.userData) : this.genereteError()
      if (this.$route.query.redirect) {
        this.$router.push({
          path: this.$route.query.redirect
        })
      } else this.$router.push({ name: 'home' })
      this.userData = {
        login: '',
        password: ''
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>