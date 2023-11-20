<template>
  <div class="lesson-editor">
    <div class="lesson-editor__select"> спеціалізація <select v-model="lessonData.subjectId">
        <option disabled selected>Оберіть предмет</option>
        <option v-for="sebject in getSubjects" :key="sebject.id" :value="sebject.id">{{ sebject.subject }}</option>
      </select>
    </div>
    <div class="lesson-editor__select"> клас <select v-model="lessonData.classId">
        <option disabled selected>Оберіть клас</option>
        <option v-for="classItem in getClassesList" :key="classItem.id" :value="classItem.id">{{ classItem.classTitle }}</option>
      </select>
    </div>
    <button type="button" class="class" @click="onAction">{{ actionButtonTitle }}</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: 'LessonsEditView',
  data() {
    return {
      lessonData: {},
    }
  },
  computed: {
    ...mapGetters(['getSubjects', 'getClassesList']),
    ...mapGetters('lessons', ['getLessonById']),
    recievedLessonId() {
      return this.$route.params.id
    },
    actionButtonTitle() {
      return this.recievedLessonId ? 'Зберегти' : 'Додати'
    }
  },
  created() {
    this.lessonData = { ...this.getLessonById(this.recievedLessonId) }
  },
  methods: {
    ...mapActions('lessons', ['addLesson', 'updateLesson']),
    onAction() {
      if (!this.recievedLessonId) this.addLesson(this.lessonData)
      else this.updateLesson(this.lessonData)
      this.$router.push({ name: 'lessons' })
    }
  },

}
</script>

<style lang="scss" scoped></style>