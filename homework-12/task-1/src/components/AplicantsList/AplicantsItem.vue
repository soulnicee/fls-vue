<template>
  <div class="aplicant universal-item">
    <div class="aplicant__name universal-item__name">{{ aplicantData.name }}</div>
    <div class="aplicant__profession universal-item__profession">{{ aplicantData.profession }}</div>
    <div class="aplicant__experience universal-item__experience" :class="experienceLevel">{{ aplicantData.experience }}</div>
    <button type="button" class="aplicant__edit-btn universal-item__edit-btn" @click="$emit('onAplicantEdit', aplicantData.id)">Редагувати</button>
    <button type="button" class="aplicant__delete-btn universal-item__delete-btn" @click="$emit('onAplicantDelete', aplicantData.id)">Видалити</button>
  </div>
</template>

<script>
export default {
  name: 'AplicantsItem',
  props: {
    aplicantData: {
      type: Object,
      required: true
    },
  },
  emits: ['onAplicantEdit', 'onAplicantDelete'],
  computed: {
    experienceLevel() {
      let exp
      if (this.aplicantData.experience < 2) {
        exp = 'junior'
      } else if (this.aplicantData.experience < 5) {
        exp = 'middle'
      } else exp = 'senior'
      return exp
    }
  },
}
</script>

<style lang="scss" scoped></style>