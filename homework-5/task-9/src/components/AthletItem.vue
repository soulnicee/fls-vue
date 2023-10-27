<template>
  <div class="item">
    <div class="item__name">{{ athletItem.name }}</div>
    <div class="item__arrow" @click="$emit('choose', athletItem.id)">====>>>></div>
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
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/athlet/';
</style>