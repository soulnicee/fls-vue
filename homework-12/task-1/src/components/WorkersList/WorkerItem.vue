<template>
  <div class="worker">
    <div class="worker__name">{{ workerData.name }}</div>
    <div class="worker__profession">{{ workerData.profession }}</div>
    <div class="worker__experience">{{ workerData.experience }}</div>
    <button type="button" class="worker__edit" @click="$emit('onWorkerEdit', workerData.id)">Редагувати</button>
    <button type="button" class="worker__delete" @click="$emit('onWorkerDelete', workerData.id)">Видалити</button>
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
  emits: ['onWorkerEdit', 'onWorkerDelete']
}
</script>

<style lang="scss" scoped></style>