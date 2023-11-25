<template>
  <div v-for="subject in subjectsList" :key="subject.id" class="subject-checkbox">
    <label :for="subject.id" class="subject-checkbox__label">{{ subject.name }}</label>
    <input :id="subject.id" class="subject-checkbox__input" type="checkbox" :value="subject.id">
  </div>
</template>

<script>
import { mapGetters } from 'vuex';


export default {
  name: 'SubjectsList',
  computed: {
    ...mapGetters('subjects', ['subjectsList'])
  },
}
</script>

<style lang="scss" scoped></style>