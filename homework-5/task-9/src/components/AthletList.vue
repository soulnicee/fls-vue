<template>
  <div>
    <div class="list__empty" v-if="!athletList.length"> None </div>
    <div class="list__items" v-else>
      <athlet-item v-for="athlet in athletList" :key="athlet.id" :athlet-item="athlet" @choose="$emit('choose', $event)" />
    </div>
  </div>
</template>

<script>
import AthletItem from "./AthletItem.vue";
export default {
  name: 'AthletList',
  components: {
    AthletItem,
  },
  props: {
    athletList: {
      type: Array,
      required: true
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/athlet-list/';
</style>