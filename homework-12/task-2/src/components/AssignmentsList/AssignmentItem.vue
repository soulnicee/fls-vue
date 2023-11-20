<template>
  <div class="list-item-container assignment">
    <div class="assignment__name assignment__item">{{ assignmentData.teacherName }}</div>
    <div class="assignment__subject assignment__item">{{ assignmentData.subjectTitle }}</div>
    <div class="assignment__class assignment__item">{{ assignmentData.classTitle }}</div>
    <button type="button" class="assignment__edit-btn assignment__item" @click="$emit('onAssignmentEdit', assignmentData.id)">Edit</button>
    <button type="button" class="assignment__delete-btn assignment__item" @click="$emit('onAssignmentDelete', assignmentData.id)">Delete</button>
  </div>
</template>

<script>
export default {
  name: 'AssignmentItem',
  props: {
    assignmentData: {
      type: Object,
      required: true
    },
  },
  emits: ['onAssignmentEdit', 'onAssignmentDelete']
}
</script>

<style lang="scss" scoped></style>