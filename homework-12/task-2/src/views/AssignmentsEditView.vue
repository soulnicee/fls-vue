<template>
  <div class="editor">
    <h1 class="editor__title">Встановіть призначення</h1>
    <div class="editor__selects">
      <div class="editor__select">
        <div class="editor__select-title">піб</div>
        <select v-model="assignmentData.teacherId">
          <option disabled selected>Оберіть вчителя</option>
          <option v-for="teacher in filteredTeacherList" :key="teacher.id" :value="teacher.id">{{ teacher.name }}</option>
        </select>
      </div>
      <div class="editor__select">
        <div class="editor__select-title">спеціалізація</div>
        <select v-model="assignmentData.lessonId">
          <option disabled selected>Оберіть предмет</option>
          <option v-for="lesson in filteredLessonsList" :key="lesson.id" :value="lesson.id">{{ lesson.subjectTitle }}</option>
        </select>
      </div>
      <div class="editor__select">
        <div class="editor__select-title">клас</div>
        <select v-model="assignmentData.classId">
          <option disabled selected>Оберіть предмет</option>
          <option v-for="classItem in filteredLessonsList" :key="classItem.id" :value="classItem.id">{{ classItem.classTitle }}</option>
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
  name: 'AssignmentsEditView',
  data() {
    return {
      assignmentData: {},
      filteredTeacherList: [],
      filteredLessonsList: [],
      isDataSelected: null
    }
  },
  computed: {
    ...mapGetters('assignments', ['getAssignmentDataById']),
    ...mapGetters('teachers', ['teachersList', 'getSubjectTeacherById', 'getTeachersBySubjectId']),
    ...mapGetters('lessons', ['getLessonsList', 'getLessonsBySubjectId', 'getClassSubjectById']),
    ...mapGetters(['getSubjectById']),
    recievedAssignmentId() {
      return this.$route.params.id
    },
    actionButtonTitle() {
      return this.recievedAssignmentId ? 'Зберегти' : 'Додати'
    },
  },
  watch: {
    "assignmentData.teacherId"(newValue) {
      let teacherSubjIdById = this.getSubjectTeacherById(newValue)
      this.filteredLessonsList = this.getLessonsBySubjectId(teacherSubjIdById)
    },
    "assignmentData.classId"(newValue) {
      console.log(newValue);
      let classSubjIdById = this.getClassSubjectById(newValue)
      console.log(classSubjIdById);
      this.filteredTeacherList = this.getTeachersBySubjectId(classSubjIdById)

    },
  },
  created() {
    this.assignmentData = { ...this.getAssignmentDataById(this.recievedAssignmentId) }
    this.filteredTeacherList = this.teachersList
    this.filteredLessonsList = this.getLessonsList
  },
  methods: {
    ...mapActions('assignments', ['addAssignment', 'updateAssignment']),
    onAction() {
      if (isObjectEmpty(this.assignmentData)) {
        this.isDataSelected = false
        return
      }
      if (!this.recievedAssignmentId) this.addAssignment(this.assignmentData)
      else this.updateAssignment(this.assignmentData)
      this.isDataSelected = null
      this.$router.push({ name: 'assignments' })
    }
  },

}
</script>

<style lang="scss" scoped></style>