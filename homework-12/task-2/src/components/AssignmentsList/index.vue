<template>
  <div class="assignments">
    <h1 class="assignments__title">Призначення</h1>
    <div class="assignments__about">
      <div class="assignments__name">піб</div>
      <div class="assignments__subject">спеціалізація</div>
      <div class="assignments__class">клас</div>
    </div>
    <ul class="assignments-list">
      <li v-for="assignment in getAssignmentsList" :key="assignment.id" class="assignments-list__item">
        <assignment-item :assignment-data="assignment" @on-assignment-delete="deleteAssignment($event)" @on-assignment-edit="onAssignmentEdit" />
      </li>
    </ul>
    <router-link :to="{ name: 'assignments-config' }" class="assignments__create-btn">Додати</router-link>
  </div>
</template>

<script>
import AssignmentItem from "@/components/AssignmentsList/AssignmentItem";
import { mapGetters, mapActions } from "vuex";
export default {
  name: 'AssignmentsList',
  components: {
    AssignmentItem,
  },
  computed: {
    ...mapGetters('assignments', ['getAssignmentsList'])
  },
  methods: {
    ...mapActions('assignments', ['deleteAssignment']),
    onAssignmentEdit(assignmentId) {
      this.$router.push({
        name: 'assignments-config',
        params: {
          id: assignmentId
        }
      })
    }
  },
}
</script>

<style lang="scss" scoped></style>