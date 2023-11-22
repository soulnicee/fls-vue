<template>
  <div class="interviews universal-list">
    <h1 class="interviews__title universal-list__title">Співбесіди</h1>
    <div class="interviews__item universal-list__item">
      <interviews-item
v-for="interview in transformedInterviewsList" :key="interview.id" :interview-data="interview"
        @on-interview-edit="onInterviewEdit" @on-interview-delete="deleteInterview($event)" />
    </div>
    <router-link :to="{ name: 'interviews-edit' }" class="interviews__add-btn universal-list__add-btn">Назначити співбесіду</router-link>
  </div>
</template>

<script>
import InterviewsItem from "@/components/InterviewsList/InterviewsItem.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: 'InterviewsList',
  components: {
    InterviewsItem,
  },
  computed: {
    ...mapGetters('interviews', ['transformedInterviewsList'])
  },
  methods: {
    ...mapActions('interviews', ['deleteInterview']),
    onInterviewEdit(id) {
      this.$router.push({
        name: 'interviews-edit',
        params: {
          id: id
        }
      })
    }
  },
}
</script>

<style lang="scss" scoped></style>