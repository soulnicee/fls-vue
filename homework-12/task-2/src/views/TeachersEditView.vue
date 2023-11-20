<template>
  <div class="editor">
    <h1 class="editor__title">Встановіть уроки для класів</h1>
    <div class="editor__selects">
      <div class="editor__select">
        <label class="editor__label">
          <div class="editor__input-title">піб</div>
          <input v-model="teacherData.name" type="text" class="editor__input">
        </label>
      </div>
      <div class="editor__select">
        <div class="editor__select-title">спеціалізація</div>
        <select v-model="teacherData.subjectId">
          <option disabled selected>Оберіть предмет</option>
          <option v-for="sebject in getSubjects" :key="sebject.id" :value="sebject.id">{{ sebject.subject }}</option>
        </select>
      </div>
    </div>
    <button type="button" class="editor__button" @click="onAction">{{ actionButtonTitle }}</button>
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