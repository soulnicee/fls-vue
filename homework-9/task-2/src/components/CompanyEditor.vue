<template>
  <div class="editors">
    <div class="editor">
      <label class="editor__label"> Title <input v-model.lazy="company.title" autocomplete="off" type="text" class="editor__input">
      </label>
    </div>
    <div class="editor">
      <label class="editor__label"> Year <input v-model.lazy="company.year" autocomplete="off" type="number" class="editor__input">
      </label>
    </div>
    <div class="editor">
      <label class="editor__label"> Rate <input v-model.lazy="company.taxRate" autocomplete="off" type="number" class="editor__input">
      </label>
    </div>
    <div class="editor">
      <label class="editor__label"> Owner <input v-model.lazy="company.owner" autocomplete="off" type="text" class="editor__input">
      </label>
    </div>
    <button type="button" class="reset-editor" @click="onAction">{{ actionButtonTitle }}</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'CompanyEditor',
  data() {
    return {
      company: {}
    }
  },
  computed: {
    ...mapGetters('companies', ['getCompanyById']),
    recievedCompanyId() {
      return this.$route.params.companyId
    },
    actionButtonTitle() {
      return this.recievedCompanyId ? 'Save' : 'Create'
    }
  },
  created() {
    if (this.recievedCompanyId) {
      this.company = { ...this.getCompanyById(this.recievedCompanyId) }
    }
  },
  methods: {
    ...mapActions('companies', ['addCompany', 'updateCompany']),
    onAction() {
      if (!this.recievedCompanyId) {
        this.addCompany(this.company)
      } else this.updateCompany(this.company)
      this.$router.push({
        name: 'home'
      })
    }
  },

}
</script>

<style lang="scss" scoped></style>