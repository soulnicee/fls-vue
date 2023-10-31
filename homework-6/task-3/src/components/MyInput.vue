<template>
  <div class="user">
    <label> Введіть ваш імейл: <input type="email" class="user__input" :class="[isUserColor]" v-model="userInp"> {{ defaultDomain }} </label>
  </div>
</template>

<script>
const users = ['vasya', 'marichka']
export default {
  name: 'MyInput',
  props: {
    vUserMail: {
      type: String
    },
    vUserMailModifiers: {
      default: () => ({})
    },
    defaultDomain: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isUserColor: null
    }
  },
  computed: {
    usersData() {
      return users
    },
    userInp: {
      get() {
        return this.vUserMail
      },
      set(newVal) {
        if (this.vUserMailModifiers.check) {
          this.userChecker(newVal)
          this.$emit('update:vUserMail', newVal)
        }
      }
    }
  },
  methods: {
    userChecker(name) {
      if (!name) {
        this.isUserColor = 'default'
        return
      }
      const userName = name.toLowerCase()
      this.usersData.some((el) => userName === el) ? this.isUserColor = 'correct' : this.isUserColor = 'incorrect'
    }
  },
}
</script>

<style lang="scss" scoped>
.incorrect {
  background-color: red;
}

.correct {
  background-color: green;
}

.default {
  background-color: #fff;
}
</style>