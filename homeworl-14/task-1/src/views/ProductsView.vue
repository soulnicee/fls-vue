<template>
  <main-master-page>
    <template #title>
      <h1 class="title">Оберіть продукти</h1>
    </template>
    <div>
      <card-list :items-list="productsList" />
    </div>
  </main-master-page>
</template>

<script>
import CardList from '@/components/CardList.vue';
import MainMasterPage from "@/masterpages/MainMasterPage.vue";
import { mapGetters } from "vuex";
export default {
  name: 'ProductsView',
  components: {
    CardList,
    MainMasterPage
  },
  computed: {
    ...mapGetters('products', ['productsList'])
  },
}
</script>

<style lang="scss" scoped></style>