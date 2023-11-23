<template>
  <div class="aplicants universal-list">
    <h1 class="aplicants__title universal-list__title">Наші кандидати</h1>
    <div class="aplicants__item universal-list__item">
      <list-item v-for="aplicant in transformedAplicantsList" :key="aplicant.id" :item-data="aplicant" @on-item-edit="onAplicantEdit"
        @on-item-delete="deleteAplicant($event)" />
    </div>
    <router-link :to="{ name: 'aplicants-edit' }" class="aplicants__add-btn universal-list__add-btn">Додати кандидата</router-link>
  </div>
</template>

<script>
import ListItem from "@/components/ListItem.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: 'AplicantsList',
  components: {
    ListItem,
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