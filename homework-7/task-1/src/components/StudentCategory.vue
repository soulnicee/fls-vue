<template>
  <select v-model="currentCategory">
    <option v-for="category in studentsCategoryList" :key="category.title" :value="category">{{ category.title }}</option>
  </select>
  <div> {{ currentCategory }}</div>
</template>

<script>
import { studentsCategoryList } from "@/data/category.js";
import { mapGetters, mapActions } from "vuex";
export default {
  name: 'StudentCategory',
  computed: {
    ...mapGetters(['currentCategory']),
    studentsCategoryList() {
      return studentsCategoryList
    },
    currentCategory: {
      get() {
        return this.currentCategory
      },
      set(value) {
        this.setStudentCategory(value)
      }
    }
  },
  methods: {
    ...mapActions(['setStudentCategory'])
  },
}
</script>

<style lang="scss" scoped></style>