<template>
  <div class="workers">
    <h1 class="workers__title">Наші працівники</h1>
    <worker-item v-for="worker in transformedWorkersList" :key="worker.id" :worker-data="worker" @on-worker-edit="onWorkerEdit"
      @on-worker-delete="deleteWorker($event)" />
  </div>
  <router-link :to="{ name: 'workers-edit' }">Додати працівника</router-link>
</template>

<script>
import WorkerItem from "@/components/WorkersList/WorkerItem.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: 'WorkersList',
  components: {
    WorkerItem,
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