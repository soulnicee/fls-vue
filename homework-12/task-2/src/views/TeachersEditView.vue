<template>
  <div class="teacher-editor">
    <div class="teacher-editor__item">
      <label> піб <input v-model="teacherData.name" type="text" class="teacher-editor__input">
      </label>
    </div>
    <div class="teacher-editor__select"> спеціалізація <select v-model="teacherData.subjectId">
        <option disabled selected>Оберіть предмет</option>
        <option v-for="sebject in getSubjects" :key="sebject.id" :value="sebject.id">{{ sebject.subject }}</option>
      </select>
    </div>
    <button type="button" class="class" @click="onAction">{{ actionButtonTitle }}</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: 'TeachersEditView',
  data() {
    return {
      teacherData: {},
    }
  },
  computed: {
    ...mapGetters(['getSubjects']),
    ...mapGetters('teachers', ['getTeacherById']),
    recievedTeacherId() {
      return this.$route.params.id
    },
    actionButtonTitle() {
      return this.recievedTeacherId ? 'Зберегти' : 'Додати'
    }
  },
  created() {
    this.teacherData = { ...this.getTeacherById(this.recievedTeacherId) }
  },
  methods: {
    ...mapActions('teachers', ['addTeacher', 'updateTeacher']),
    onAction() {
      if (!this.recievedTeacherId) this.addTeacher(this.teacherData)
      else this.updateTeacher(this.teacherData)
      this.$router.push({ name: 'teachers' })
    }
  },

}
</script>

<style lang="scss" scoped></style>