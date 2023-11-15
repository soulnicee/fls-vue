<template>
  <div v-for="(value, index) in company" :key="index" class="item"> {{ value }} </div>
  <button type="button" class="edit-button" @click="onEdit(company.id)">Edit</button>
  <button type="button" class="delete-button" @click="removeCompany(company.id)">Delete</button>
</template>

<script>
import { mapActions } from 'vuex';


export default {
  name: 'CompanyItem',
  props: {
    company: {
      type: Object,
      required: true
    },
  },
  methods: {
    ...mapActions('companies', ['removeCompany']),
    onEdit() {
      this.$router.push({
        name: 'company',
        params: {
          companyId: this.company.id
        }
      })
    }
  },
}
</script>

<style lang="scss" scoped>
.item {
  width: 150px;
}

.edit-button {}

.delete-button {}
</style>