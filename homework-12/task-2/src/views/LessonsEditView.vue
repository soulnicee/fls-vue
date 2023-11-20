<template>
  <div class="editor">
    <h1 class="editor__title">Встановіть уроки для класів</h1>
    <div class="editor__selects">
      <div class="editor__select">
        <div class="editor__select-title">спеціалізація</div>
        <select v-model="lessonData.subjectId">
          <option disabled selected>Оберіть предмет</option>
          <option v-for="sebject in getSubjects" :key="sebject.id" :value="sebject.id">{{ sebject.subject }}</option>
        </select>
      </div>
      <div class="editor__select">
        <div class="editor__select-title">клас</div>
        <select v-model="lessonData.classId">
          <option disabled selected>Оберіть клас</option>
          <option v-for="classItem in getClassesList" :key="classItem.id" :value="classItem.id">{{ classItem.classTitle }}</option>
        </select>
      </div>
    </div>
    <div v-if="isDataSelected === false" class="editor__error"> будь-ласка, зробіть вибір і натисніть кнопку нижче </div>
    <button type="button" class="editor__button" @click="onAction">{{ actionButtonTitle }}</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { isObjectEmpty } from "@/utilities/utils.js";
export default {
  name: 'LessonsEditView',
  data() {
    return {
      lessonData: {},
      isDataSelected: null
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
      if (isObjectEmpty(this.lessonData)) {
        this.isDataSelected = false
        return
      }
      if (!this.recievedLessonId) this.addLesson(this.lessonData)
      else this.updateLesson(this.lessonData)
      this.isDataSelected = null
      this.$router.push({ name: 'lessons' })
    }
  },

}
</script>

<style lang="scss" scoped></style>