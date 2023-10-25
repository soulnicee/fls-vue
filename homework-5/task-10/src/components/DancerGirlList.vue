<template>
  <div class="girls">
    <h2 class="girls__title title">{{ title }}</h2>
    <div class="girls__empty empty" v-if="!girlsList.length">{{ message }}</div>
    <ol class="girls__list" v-else>
      <li class="girls__item" :class="{ 'choosen': selectedGirl === girl.id }" v-for="girl in girlsList" :key="girl.id" @click="choosen(girl.id)">{{
        girl.name }}</li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'DancerGirlList',
  props: {
    girlsList: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    message: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      selectedGirl: null
    }
  },
  methods: {
    choosen(id) {
      if (this.selectedGirl === id) this.selectedGirl = null
      else this.selectedGirl = id
      this.$emit('chooseGirl', this.selectedGirl)
    }
  },
}
</script>

<style lang="css">
.girls {}

.girls__title {}

.girls__empty {}

.girls__list {}

.girls__item {
  padding: 3px 10px;
  cursor: pointer;
  border: 1px solid transparent;
  margin-bottom: 5px;
  font-size: 20px;
}

.choosen {
  border: 1px solid green;
}
</style>