<template>
  <div class="item">
    <div class="item__name">{{ athletItem.name }}</div>
    <div class="item__arrow" @click="$emit('choose', athletItem.id)">{{ arrow }}</div>
  </div>
</template>

<script>
export default {
  name: 'AthletItem',
  props: {
    athletItem: {
      type: Object,
      required: true
    },
    arrow: {
      type: String,
      required: true
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/athlet/';
</style>