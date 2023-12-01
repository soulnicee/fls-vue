<template>
  <main-master-page>
    <div>
      <card-list :items-list="productsList" />
    </div>
  </main-master-page>
</template>

<script>
import CardList from '@/components/CardList.vue';
import { mapGetters } from "vuex";
export default {
  name: 'ProductsView',
  components: {
    CardList,
  },
  computed: {
    ...mapGetters('products', ['productsList'])
  },
}
</script>

<style lang="scss" scoped></style>