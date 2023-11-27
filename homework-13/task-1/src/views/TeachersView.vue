<template>
  <div class="teachers">
    <h1 class="teachers__title">Вибір вчителів</h1>
    <ol class="teachers__list">
      <li v-for="subjectId in selectedSubjectsList" :key="subjectId" class="teachers__item-container">
        <div class="teachers__item">
          <label :for="subjectId" class="teacher-select__label">{{ getSubjectById(subjectId).name }}</label>
          <select :id="subjectId" v-model="selectedTeachers[subjectId]">
            <option disabled selected>Оберіть вчителя</option>
            <option v-for="teacher in filteredTeachersList(subjectId)" :key="teacher.id" :value="teacher.id">{{ teacher.name }} </option>
          </select>
        </div>
      </li>
    </ol>
    <div v-if="errorMessage" class="empty-list">{{ errorMessage }}</div>
    <button type="button" class="subjects__btn" @click="confirmSelected">Підтвердити вибір</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: 'TeachersView',
  props: {
    selectedSubjectsList: {
      type: Array,
      required: true
    },
  },
  data() {
    return {
      selectedTeachers: {},
      errorMessage: ''
    }
  },
  computed: {
    ...mapGetters('teachers', ['filteredTeachersList', 'getTeacherBySubjectId']),
    ...mapGetters('subjects', ['getSubjectById'])
  },
  methods: {
    showError() {
      this.errorMessage = 'Потрібно вибрати вчителів'
      setTimeout(() => {
        this.errorMessage = ''
      }, 5000);
    },
    confirmSelected() {
      let selectedLessonsPairIdList = Object.entries(this.selectedTeachers)
      if (this.selectedSubjectsList.length === selectedLessonsPairIdList.length) {
        console.log(selectedLessonsPairIdList);
        const lessonPair = selectedLessonsPairIdList.map(([subjectId, teacherId]) => `${subjectId}-${teacherId}`)
        this.$router.push({
          name: 'lessons_list',
          params: {
            lessonPair: lessonPair,
          }
        })
      } else {
        this.showError()
      }
    }
  },
}
</script>

<style lang="scss" scoped></style>