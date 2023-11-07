<template>
  <div class="students">
    <div class="students__list">
      <students-list :students-list="studentsListChangedCategory" />
    </div>
    <div class="students__score">
      <score-category @selected-value="onSelectedValue" />
    </div>
    <div class="students__category">
      <student-category />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import StudentsList from "@/components/StudentsList.vue";
import ScoreCategory from "@/components/ScoreCategory.vue";
import StudentCategory from "@/components/StudentCategory.vue";
export default {
  name: 'StudentsManager',
  components: {
    StudentsList,
    ScoreCategory,
    StudentCategory
  },
  data() {
    return {
      scoreCategory: null
    }
  },
  computed: {
    ...mapGetters(['studentsList', 'studentsListWithCategory', 'filteredByCategory']),
    studentsListChangedCategory() {
      const category = parseInt(this.scoreCategory)
      if (category) return this.studentsListWithCategory(category)
      else return this.filteredByCategory
    }
  },
  methods: {
    ...mapActions(['loadStudentsList']),
    onSelectedValue(selectedValue) {
      this.scoreCategory = selectedValue
    },
  },
  created() {
    this.loadStudentsList()
  },
}
</script>

<style lang="scss" scoped>
.students {
  display: flex;
  gap: 200px;
  padding: 0 50px;

  // .students__list
  &__list {
    width: 300px;
  }

  &__score {}

  // .students__category
  &__category {}
}
</style>