<template>
  <div class="companies-filter">
    <companies-filter />
  </div>
  <div class="companies-list">
    <companies-list />
  </div>
</template>

<script>
import CompaniesFilter from "@/components/CompaniesFilter.vue";
import CompaniesList from "@/components/CompaniesList";
export default {
  name: 'CompaniesManager',
  components: {
    CompaniesFilter,
    CompaniesList,
  },
}
</script>

<style lang="scss" scoped>
.companies-filter {
  &:not(:last-child) {
    margin-bottom: 25px;
  }
}

.companies-list {}
</style>