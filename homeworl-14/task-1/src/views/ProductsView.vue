<template>
  <main-master-page>
    <template #title>
      <h1 class="title">Оберіть продукти</h1>
    </template>
    <nav class="sub-menu">
      <router-link :to="{ name: 'selector' }">Фільтр</router-link> | <router-link :to="{ name: 'editor' }">Додати товар</router-link>
    </nav>
    <router-view />
    <div>
      <card-list :items-list="filteredProductsList" />
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
    ...mapGetters('products', ['filteredProductsList'])
  },
}
</script>

<style lang="scss" scoped></style>