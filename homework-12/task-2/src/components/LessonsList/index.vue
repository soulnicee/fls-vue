<template>
  <div class="lessons">
    <h1 class="lessons__title">Уроки</h1>
    <div class="lessons__about">
      <div class="lessons__subject">спеціалізація</div>
      <div class="lessons__class">клас</div>
    </div>
    <ul class="lessons-list">
      <li v-for="lesson in getLessonsList" :key="lesson.id" class="lessons-list__item">
        <lesson-item :lessons-data="lesson" @on-lesson-delete="deleteLesson($event)" @on-lesson-edit="onLessonEdit" />
      </li>
    </ul>
    <router-link :to="{ name: 'lessons-config' }" class="lessons__create-btn">Додати</router-link>
  </div>
</template>

<script>
import LessonItem from "@/components/LessonsList/LessonItem";
import { mapGetters, mapActions } from "vuex";
export default {
  name: 'LessonsList',
  components: {
    LessonItem,
  },
  computed: {
    ...mapGetters('lessons', ['getLessonsList'])
  },
  methods: {
    ...mapActions('lessons', ['deleteLesson']),
    onLessonEdit(lessonId) {
      this.$router.push({
        name: 'lessons-config',
        params: {
          id: lessonId
        }
      })
    }
  },
}
</script>

<style lang="scss" scoped></style>