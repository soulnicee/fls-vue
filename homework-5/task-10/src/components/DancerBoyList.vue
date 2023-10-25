<template>
  <div class="boys">
    <h2 class="boys__title title">{{ title }}</h2>
    <div class="boys__empty empty" v-if="!boysList.length">{{ message }}</div>
    <ol class="boys__list" v-else>
      <li class="boys__item" :class="{ 'choosen': selectedBoy === boy.id }" v-for="boy in boysList" :key="boy.id" @click="choosen(boy.id)">{{ boy.name
      }}</li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'DancerBoyList',
  props: {
    boysList: {
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
      selectedBoy: null
    }
  },
  methods: {
    choosen(id) {
      if (this.selectedBoy === id) this.selectedBoy = null
      else this.selectedBoy = id
      this.$emit('chooseBoy', this.selectedBoy)
    }
  },
}
</script>

<style lang="css">
.boys {}

.boys__title {}

.boys__empty {}

.boys__list {}

.boys__item {
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