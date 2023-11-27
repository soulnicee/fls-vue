<template>
  <div class="teachers">
    <h1 class="teachers__title">Вибір вчителів</h1>
    <ol class="teachers__list">
      <li v-for="subjectId in selectedSubjectsList" :key="subjectId" class="teachers__item-container">
        <div class="teachers__item">
          <label :for="subjectId" class="teacher-select__label">{{ getSubjectById(subjectId).name }}</label>
          <select :id="subjectId">
            <option disabled selected>Оберіть вчителя</option>
            <option v-for="teacher in filteredTeachersList(subjectId)" :key="teacher.id" :value="teacher.id">{{ teacher.name }} </option>
          </select>
        </div>
      </li>
    </ol>
    <!-- <div v-if="errorMessage" class="empty-list">{{ errorMessage }}</div> -->
    <button type="button" class="subjects__btn" @click="click">Підтвердити вибір</button>
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
  computed: {
    ...mapGetters('teachers', ['filteredTeachersList']),
    ...mapGetters('subjects', ['getSubjectById'])
  },
  methods: {
    click() {
      console.log(this.filteredTeachersList(this.selectedSubjectsList[0]));
    }
  },
}
</script>

<style lang="scss" scoped></style>