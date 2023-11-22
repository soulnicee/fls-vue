<template>
  <div class="workers universal-list">
    <h1 class="workers__title universal-list__title">Наші працівники</h1>
    <div class="universal-list__item">
      <worker-item v-for="worker in transformedWorkersList" :key="worker.id" :worker-data="worker" @on-worker-edit="onWorkerEdit"
        @on-worker-delete="deleteWorker($event)" />
    </div>
    <router-link :to="{ name: 'workers-edit' }" class="workers__add-btn universal-list__add-btn">Додати працівника</router-link>
  </div>
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

<style lang="scss" scoped>
.workers {

  // .workers__title
  &__title {}

  // .workers__add-btn
  &__add-btn {}
}

.universal-list {
  display: flex;
  flex-direction: column;
  padding: 0px 15px;

  // .universal-list__title
  &__title {
    align-self: center;

    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }

  // .universal-list__item
  &__item {
    &:not(:last-child) {
      margin-bottom: 25px;
    }
  }

  // .universal-list__add-btn
  &__add-btn {
    align-self: flex-start;
    border: 2px solid transparent;
    border-radius: 10px;
    padding: 10px 15px;
    background-color: rgb(149, 252, 243);
    font-size: 18px;
    color: #000;
    transition: all 0.3s;

    @media (any-hover: hover) {
      &:hover {
        border: 2px solid #db7878;
      }
    }
  }
}
</style>