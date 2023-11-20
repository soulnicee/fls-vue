<template>
  <div class="assignment-editor">
    <h1 class="assignment-editor__title">Встановіть призначення</h1>
    <div class="assignment-editor__selects">
      <div class="assignment-editor__select">
        <div class="assignment-editor__select-title">піб</div>
        <select v-model="assignmentData.teacherId">
          <option disabled selected>Оберіть вчителя</option>
          <option v-for="teacher in filteredTeacherList" :key="teacher.id" :value="teacher.id">{{ teacher.name }}</option>
        </select>
      </div>
      <div class="assignment-editor__select">
        <div class="assignment-editor__select-title">спеціалізація</div>
        <select v-model="assignmentData.lessonId">
          <option disabled selected>Оберіть предмет</option>
          <option v-for="lesson in filteredLessonsList" :key="lesson.id" :value="lesson.id">{{ lesson.subjectTitle }}</option>
        </select>
      </div>
      <div class="assignment-editor__select">
        <div class="assignment-editor__select-title">клас</div>
        <select v-model="assignmentData.classId">
          <option disabled selected>Оберіть предмет</option>
          <option v-for="classItem in filteredLessonsList" :key="classItem.id" :value="classItem.id">{{ classItem.classTitle }}</option>
        </select>
      </div>
    </div>
    <button type="button" class="button-save" @click="onAction">{{ actionButtonTitle }}</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: 'AssignmentsEditView',
  data() {
    return {
      assignmentData: {},
      filteredTeacherList: [],
      filteredLessonsList: []
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
      if (!this.recievedAssignmentId) this.addAssignment(this.assignmentData)
      else this.updateAssignment(this.assignmentData)
      this.$router.push({ name: 'assignments' })
    }
  },

}
</script>

<style lang="scss" scoped>
.assignment-editor {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 10px;

  &__title {
    font-size: 24px;

    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }

  &__select-title {
    text-align: center;
    text-transform: uppercase;
  }

  &__selects {
    display: flex;
    gap: 30px;

    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }

  // .assignment-editor__select
  &__select {
    width: 250px;

    select {
      width: 100%;
      font-size: 18px;
    }
  }
}

.button-save {}
</style>