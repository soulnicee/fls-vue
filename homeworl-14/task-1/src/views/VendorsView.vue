<template>
  <main-master-page>
    <div>
      <card-list :items-list="vendorsList" />
    </div>
  </main-master-page>
</template>

<script>
import CardList from '@/components/CardList.vue';
import { mapGetters } from "vuex";
export default {
  name: 'VendorsView',
  components: {
    CardList,
  },
  computed: {
    ...mapGetters('vendors', ['vendorsList'])
  },
}
</script>

<style lang="scss" scoped></style>