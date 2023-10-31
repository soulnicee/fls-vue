<template>
  <div class="user">
    <label> Введіть ім’я користувача : <input type="text" class="user__input" :class="{ 'emty': isEmptyField }" v-model="userName">
    </label>
    <label> Введіть вік користувача : <input type="number" class="user__input" :class="[ageCheck]" v-model="userAge">
    </label>
  </div>
</template>

<script>
export default {
  name: 'UserInfo',
  props: {
    vName: {
      type: String
    },
    vNameModifiers: {
      default: () => ({})
    },
    vAge: {
      type: Number
    },
    vAgeModifiers: {
      default: () => ({})
    }
  },
  data() {
    return {
      isEmptyField: null,
      ageCheck: 'default'
    }
  },
  computed: {
    userName: {
      get() {
        return this.vName
      },
      set(newVal) {
        this.emtyFieldCheck(newVal)
        this.$emit('update:vName', newVal)
      }
    },
    userAge: {
      get() {
        return this.vAge
      },
      set(newVal) {
        this.ageClassAdd(newVal)
        this.$emit('update:vAge', newVal)
      }
    }
  },
  methods: {
    emtyFieldCheck(str) {
      str ? this.isEmptyField = null : this.isEmptyField = true
    },
    ageClassAdd(num) {
      if (num === '' || num < 0) this.ageCheck = 'default'
      else if (num < 18) this.ageCheck = 'child'
      else this.ageCheck = 'adult'
    }
  },
}
</script>

<style lang="scss" scoped>
.emty {
  background-color: red;
}

.default {
  background-color: #fff;
}

.adult {
  background-color: green;
}

.child {
  background-color: red;
}
</style>