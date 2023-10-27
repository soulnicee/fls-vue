<template>
  <div class="manager__container">
    <div class="manager__item">
      <h2 class="manager__title">Загальний список</h2>
      <athlet-list :athlet-list="generalAthletList" @choose="$emit('choose', { athletId: $event, general: true })" />
    </div>
    <div class="manager__item">
      <h2 class="manager__title">Обрані для змагання</h2>
      <athlet-list :athlet-list="choosenAthletList" @choose="$emit('choose', { athletId: $event, general: false })" />
    </div>
  </div>
</template>

<script>
import AthletList from "./AthletList.vue";
export default {
  name: 'AthletManager',
  components: {
    AthletList,
  },
  props: {
    generalAthletList: {
      type: Array,
      required: true
    },
    choosenAthletList: {
      type: Array,
      required: true
    },
  },

}
</script>

<style lang="scss" scoped>
@import '../assets/styles/athlet-manager/';
</style>