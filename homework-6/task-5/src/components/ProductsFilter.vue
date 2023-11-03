<template>
  <div class="sidebar">
    <store-filter :sellers-list="sellersList" v-model.check="choosenSeller" />
    <brand-filter :brands-list="brandsList" v-model.check="choosenBrand" />
    <div>{{ choosenSeller }}</div>
    <div>{{ choosenBrand }}</div>
  </div>
</template>

<script>
import StoreFilter from '@/components/StoreFilter.vue';
import BrandFilter from '@/components/BrandFilter.vue';
import { mapGetters, mapActions } from "vuex";
export default {
  name: 'ProductsFilter',
  components: {
    StoreFilter,
    BrandFilter
  },
  data() {
    return {
      choosenSeller: [],
      choosenBrand: []
    }
  },
  computed: {
    ...mapGetters(['sellersList', 'brandsList'])
  },
  methods: {
    ...mapActions(['getFilteredList']),
  },
  watch: {
    choosenSeller(newValue) {
      this.getFilteredList({
        choosenSellersList: newValue,
        choosenBrandsList: this.choosenBrand,
      });
    },
    choosenBrand(newValue) {
      this.getFilteredList({
        choosenSellersList: this.choosenSeller,
        choosenBrandsList: newValue,
      });
    },
  },
}
</script>

<style lang="scss" scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  gap: 25px;
  border: 2px solid #000;
  padding: 25px;
}
</style>