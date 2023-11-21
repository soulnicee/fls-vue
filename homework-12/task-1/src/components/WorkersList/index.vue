<template>
  <div>
    <worker-item v-for="worker in workersList" :key="worker.id" :worker-data="worker" @on-worker-edit="" @on-worker-delete="" />
  </div>
</template>

<script>
import WorkerItem from "@/components/WorkersList/WorkerItem.vue";
export default {
  name: 'WorkersList',
  components: {
    WorkerItem,
  },
}
</script>

<style lang="scss" scoped></style>