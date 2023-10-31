<template>
  <div class="user">
    <label> Введіть шлях до файлу: <input type="text" class="user__input" :class="{ 'incorrect': isCorrectPath }" v-model="userInputPath">
    </label>
  </div>
</template>

<script>
export default {
  name: 'MyInput',
  props: {
    vUserPath: {
      type: String,
    },
    vUserPathModifiers: {
      default: () => ({})
    }
  },
  data() {
    return {
      isCorrectPath: null
    }
  },
  computed: {
    userInputPath: {
      get() {
        return this.vUserPath
      },
      set(newVal) {
        if (this.vUserPathModifiers.checkPath) {
          this.pathChecker(newVal)
        }
        this.$emit('update:vUserPath', newVal)
      },
    }
  },
  methods: {
    pathChecker(str) {
      if (!str) {
        this.isCorrectPath = null
        return
      } else {
        const regex = /\.js$/
        !regex.test(str) ? this.isCorrectPath = true : this.isCorrectPath = null
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.incorrect {
  background-color: red;
}
</style>