<template>
  <div class="worker universal-item">
    <div class="worker__name universal-item__name">{{ workerData.name }}</div>
    <div class="worker__profession universal-item__profession">{{ workerData.profession }}</div>
    <div class="worker__experience universal-item__experience" :class="experienceLevel">{{ workerData.experience }}</div>
    <button type="button" class="worker__edit-btn universal-item__edit-btn" @click="$emit('onWorkerEdit', workerData.id)">Редагувати</button>
    <button type="button" class="worker__delete-btn universal-item__delete-btn" @click="$emit('onWorkerDelete', workerData.id)">Видалити</button>
  </div>
</template>

<script>
export default {
  name: 'WorkerItem',
  props: {
    workerData: {
      type: Object,
      required: true
    },
  },
  emits: ['onWorkerEdit', 'onWorkerDelete'],
  computed: {
    experienceLevel() {
      let exp
      if (this.workerData.experience < 2) {
        exp = 'junior'
      } else if (this.workerData.experience < 5) {
        exp = 'middle'
      } else exp = 'senior'
      return exp
    }
  },
}
</script>

<style lang="scss" scoped></style>