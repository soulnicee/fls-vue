<template>
  <div class="aplicants universal-list">
    <h1 class="aplicants__title universal-list__title">Наші кандидати</h1>
    <div class="aplicants__item universal-list__item">
      <aplicants-item v-for="aplicant in transformedAplicantsList" :key="aplicant.id" :aplicant-data="aplicant" @on-aplicant-edit="onAplicantEdit"
        @on-aplicant-delete="deleteAplicant($event)" />
    </div>
    <router-link :to="{ name: 'aplicants-edit' }" class="aplicants__add-btn universal-list__add-btn">Додати кандидата</router-link>
  </div>
</template>

<script>
import AplicantsItem from "@/components/AplicantsList/AplicantsItem.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: 'AplicantsList',
  components: {
    AplicantsItem,
  },
  computed: {
    ...mapGetters('aplicants', ['transformedAplicantsList'])
  },
  methods: {
    ...mapActions('aplicants', ['deleteAplicant']),
    onAplicantEdit(id) {
      this.$router.push({
        name: 'aplicants-edit',
        params: {
          id: id
        }
      })
    }
  },
}
</script>

<style lang="scss" scoped></style>