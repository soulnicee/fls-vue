<template>
  <div class="main-list">
    <workers-list />
  </div>
</template>

<script>
import WorkersList from "@/components/WorkersList/";
export default {
  name: 'WorkersView',
  components: {
    WorkersList,
  },
}
</script>

<style lang="scss" scoped>
.main-list {
  margin: 0 auto;
  max-width: 1200px;
  padding: 50px 25px;
}
</style>