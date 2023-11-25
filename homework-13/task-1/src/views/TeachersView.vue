<template>
  <div class="teachers">
    <h1 class="teachers__title">Вибір вчителів</h1>
    <ol class="teachers__list">
      <li v-for="item in selectedSubjectsList" :key="item" class="teachers__item-container">
        <div class="teachers__item">
          <label :for="item" class="teacher-select__label"></label>
          <select :id="item">
            <option v-for="teacher in filteredTeachersList" :key="teacher.id" value="1" selected>{{ teacher.name }}</option>
          </select>
        </div>
      </li>
    </ol>
    <!-- <div v-if="errorMessage" class="empty-list">{{ errorMessage }}</div>
    <button type="button" class="subjects__btn" @click="click">Підтвердити вибір</button> -->
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
    ...mapGetters('teachers', ['filteredTeachersList'])
  },
}
</script>

<style lang="scss" scoped></style>