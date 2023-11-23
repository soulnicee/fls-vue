<template>
  <div class="interview universal-item">
    <div class="interview__worker-name universal-item__name">{{ interviewData.workerName }}</div>
    <div class="interview__aplicant-name universal-item__name">{{ interviewData.aplicantName }}</div>
    <div class="interview__aplicant-name universal-item__name">{{ interviewData.professionName }}</div>
    <div class="interview__day-name universal-item__name">{{ interviewData.dayName }}</div>
    <button type="button" class="interview__edit-btn universal-item__edit-btn" @click="$emit('onInterviewEdit', interviewData.id)">Редагувати</button>
    <button type="button" class="interview__delete-btn universal-item__delete-btn"
      @click="$emit('onInterviewDelete', interviewData.id)">Видалити</button>
  </div>
</template>

<script>
export default {
  name: 'InterviewsItem',
  props: {
    interviewData: {
      type: Object,
      required: true
    },
  },
  emits: ['onInterviewEdit', 'onInterviewDelete'],
}
</script>

<style lang="scss" scoped></style>