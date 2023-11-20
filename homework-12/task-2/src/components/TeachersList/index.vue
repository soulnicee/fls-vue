<template>
  <div class="teachers">
    <h1 class="teachers__title">Наші вчителі</h1>
    <div class="teachers__about">
      <div class="teachers__names">піб</div>
      <div class="teachers__subject">спеціалізація</div>
    </div>
    <ul class="teachers-list">
      <li v-for="teacher in teachersList" :key="teacher.id" class="teachers-list__item">
        <teacher-item :teacher-data="teacher" @on-teacher-delete="deleteTeacher($event)" @on-teacher-edit="onTeacherEdit" />
      </li>
    </ul>
    <router-link :to="{ name: 'teachers-config' }" class="teachers__create-btn">Додати</router-link>
  </div>
</template>

<script>
import TeacherItem from "@/components/TeachersList/TeacherItem";
import { mapGetters, mapActions } from "vuex";
export default {
  name: 'TeachersList',
  components: {
    TeacherItem,
  },
  computed: {
    ...mapGetters('teachers', ['teachersList'])
  },
  methods: {
    ...mapActions('teachers', ['deleteTeacher']),
    onTeacherEdit(teacherId) {
      this.$router.push({
        name: 'teachers-config',
        params: {
          id: teacherId
        }
      })
    }
  },
}
</script>

<style lang="scss" scoped></style>