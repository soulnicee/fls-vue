<template>
  <div class="workers universal-list">
    <h1 class="workers__title universal-list__title">Наші працівники</h1>
    <div class="workers__item universal-list__item">
      <list-item v-for="worker in transformedWorkersList" :key="worker.id" :item-data="worker" @on-item-edit="onWorkerEdit"
        @on-item-delete="deleteWorker($event)" />
    </div>
    <router-link :to="{ name: 'workers-edit' }" class="workers__add-btn universal-list__add-btn">Додати працівника</router-link>
  </div>
</template>

<script>
import ListItem from "@/components/ListItem.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: 'WorkersList',
  components: {
    ListItem,
  },
  computed: {
    ...mapGetters('workers', ['transformedWorkersList'])
  },
  methods: {
    ...mapActions('workers', ['deleteWorker']),
    onWorkerEdit(id) {
      this.$router.push({
        name: 'workers-edit',
        params: {
          id: id
        }
      })
    }
  },
}
</script>

<style lang="scss" scoped></style>