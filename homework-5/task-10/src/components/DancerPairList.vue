<template>
  <div class="pair">
    <h2 class="pair__title title">{{ title }}</h2>
    <div class="pair__empty empty" v-if="!pairsList.length">{{ message }}</div>
    <ol class="pair__list" v-else>
      <li class="pair__item" :class="{ 'choosen': selectedPair === pair.id }" v-for="pair in pairsList" :key="pair.id" @click="choosen(pair.id)">{{
        pair.boyName }} - {{ pair.girlName }}</li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'DancerPairList',
  props: {
    pairsList: {
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
      selectedPair: null
    }
  },
  methods: {
    choosen(id) {
      if (this.selectedPair === id) this.selectedPair = null
      else this.selectedPair = id
      this.$emit('choosePair', this.selectedPair)
    }
  },
}
</script>

<style lang="css">
.pair {}

.pair__title {}

.pair__empty {}

.pair__list {}

.pair__item {
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