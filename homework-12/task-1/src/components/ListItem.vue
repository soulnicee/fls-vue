<template>
  <div class="universal-item">
    <div class="universal-item__name">{{ itemData.name }}</div>
    <div class="universal-item__profession">{{ itemData.profession }}</div>
    <div class="universal-item__experience" :class="experienceLevel">{{ itemData.experience }}</div>
    <button type="button" class="universal-item__edit-btn" @click="$emit('onItemEdit', itemData.id)">Редагувати</button>
    <button type="button" class="universal-item__delete-btn" @click="$emit('onItemDelete', itemData.id)">Видалити</button>
  </div>
</template>

<script>
export default {
  name: 'ListItem',
  props: {
    itemData: {
      type: Object,
      required: true
    },
  },
  emits: ['onItemEdit', 'onItemDelete'],
  computed: {
    experienceLevel() {
      let exp
      if (this.itemData.experience < 2) {
        exp = 'junior'
      } else if (this.itemData.experience < 5) {
        exp = 'middle'
      } else exp = 'senior'
      return exp
    }
  },
}
</script>

<style lang="scss" scoped></style>