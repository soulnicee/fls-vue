<template>
  <div class="student">
    <h2 class="student__title"> Список студентів </h2>
    <div v-for="student in studentsList" :key="student.id" class="student__container">
      <div class="student__name">{{ student.name }}</div>
      <div class="student__score">{{ student.score }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StudentsList',
  props: {
    studentsList: {
      type: Array,
      default: () => []
    },
  },
}
</script>

<style lang="scss" scoped>
.student {

  // .student__container
  &__container {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    border-bottom: 1px solid #000;
    cursor: pointer;

    @media (any-hover: hover) {
      &:hover {
        background-color: #dcdbdf;
      }
    }

    &:not(:last-child) {
      margin-bottom: 10px;

    }
  }

  // .student__name
  &__name {
    font-size: 18px;
  }

  // .student__score
  &__score {
    font-size: 18px;
    color: red;
    font-weight: 600;
  }
}
</style>