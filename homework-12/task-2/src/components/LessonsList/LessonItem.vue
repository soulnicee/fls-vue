<template>
  <div class="list-item-container lesson">
    <div class="lesson__name lesson__item">{{ lessonsData.subjectTitle }}</div>
    <div class="lesson__class lesson__item">{{ lessonsData.classTitle }}</div>
    <button type="button" class="lesson__edit-btn lesson__item" @click="$emit('onLessonEdit', lessonsData.id)">Edit</button>
    <button type="button" class="lesson__delete-btn lesson__item" @click="$emit('onLessonDelete', lessonsData.id)">Delete</button>
  </div>
</template>

<script>
export default {
  name: 'LessonItem',
  props: {
    lessonsData: {
      type: Object,
      required: true
    },
  },
  emits: ['onLessonEdit', 'onLessonDelete']
}
</script>

<style lang="scss" scoped></style>