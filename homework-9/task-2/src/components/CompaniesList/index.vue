<template>
  <div class="title">Companies List</div>
  <ul class="company-list">
    <li v-for="company in getFilteredCompaniesList" :key="company.id" class="company-list__item"><company-item :company="company" /></li>
  </ul>
  <router-link :to="{ name: 'company' }" class="create-button"> Create a company </router-link>
</template>

<script>
import { mapGetters } from 'vuex';
import CompanyItem from '@/components/CompaniesList/CompanyItem.vue';


export default {
  name: 'CompaniesList',
  components: { CompanyItem },
  computed: {
    ...mapGetters(['getFilteredCompaniesList'])
  },
}
</script>

<style lang="scss" scoped>
.company-list {
  padding: 10px 150px;

  // .company-list__item
  &__item {
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;

    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }
}
</style>