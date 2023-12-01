<template>
  <main-master-page>
    <template #title>
      <h1 class="title">Оберіть постачальника</h1>
    </template>
    <div>
      <card-list :items-list="vendorsList" />
    </div>
    <template #ranking>
      <div class="bottom__item"> Найбільш популярний: економ </div>
    </template>
  </main-master-page>
</template>

<script>
import CardList from '@/components/CardList.vue';
import MainMasterPage from "@/masterpages/MainMasterPage.vue";
import { mapGetters } from "vuex";
export default {
  name: 'VendorsView',
  components: {
    CardList,
    MainMasterPage
  },
  computed: {
    ...mapGetters('vendors', ['vendorsList'])
  },
}
</script>

<style lang="scss" scoped></style>