<template>
  <div class="lessons">
    <h1 class="lessons__title">Навчальний план</h1>
    <ol class="lessons__list">
      <li v-for="lessonPair in transformedStudyPlanData" :key="lessonPair.lessonPairId" class="lessons__item">
        <div class="lessons__subject">{{ lessonPair.subjectName }}</div>
        <div class="lessons__teacher">{{ lessonPair.teacherName }}</div>
        <button type="button" class="lessons__remove-btn" @click="removeLessonPair(lessonPair.lessonPairId)">Видалити</button>
      </li>
    </ol>
    <!-- <div v-if="errorMessage" class="empty-list">{{ errorMessage }}</div> -->
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: 'LessonsView',
  computed: {
    ...mapGetters('lessons', ['transformedStudyPlanData'])
  },
  methods: {
    ...mapActions('lessons', ['removeLessonPair']),
    lol() {

    }
  },
}
</script>

<style lang="scss" scoped></style>