<template>
  <div class="user">
    <label> Введіть вік: <input ref="userAgeInput" type="number" class="user__input" :class="{ [inputColorClass]: userAge }" v-model="userAge">
    </label>
  </div>
</template>

<script>
export default {
  name: 'MyInput',
  props: {
    vUserAge: {
      type: Number
    },
    vUserAgeModifiers: {
      default: () => ({})
    }
  },
  data() {
    return {
      inputColorClass: null
    }
  },
  computed: {
    userAge: {
      get() {
        return this.vUserAge
      },
      set(newVal) {
        if (!newVal) newVal = null
        const ageCheck = this.vUserAgeModifiers.check
        const setColor = this.vUserAgeModifiers.setColor
        if (setColor) this.colorChanger(newVal)
        if (ageCheck) this.$emit('update:vUserAge', this.userAgeChecker(newVal))
      }
    }
  },
  methods: {
    userAgeChecker(age) {
      return age > 150 || age < 0 ? age = undefined : age
    },
    colorChanger(age) {
      if (age < 10) this.inputColorClass = 'small'
      if (age > 10) this.inputColorClass = 'teeny'
      if (age > 21) this.inputColorClass = 'young'
    }
  },
  mounted() {
    this.$refs.userAgeInput.focus()
  },
}
</script>

<style lang="scss" scoped>
.small {
  background-color: green;
}

.teeny {
  background-color: yellow;
}

.young {
  background-color: orange;
}
</style>