<template>
  <div class="teacher list-item-container">
    <div class="teacher__name teacher__item">{{ teacherData.name }}</div>
    <div class="teacher__subject teacher__item">{{ teacherData.subjectName }}</div>
    <button type="button" class="teacher__edit-btn teacher__item" @click="$emit('onTeacherEdit', teacherData.id)">Edit</button>
    <button type="button" class="teacher__delete-btn teacher__item" @click="$emit('onTeacherDelete', teacherData.id)">Delete</button>
  </div>
</template>

<script>
export default {
  name: 'TeacherItem',
  props: {
    teacherData: {
      type: Object,
      required: true
    },
  },
  emits: ['onTeacherEdit', 'onTeacherDelete']
}
</script>

<style lang="scss" scoped></style>

