<template>
  <second-master-page>
    <div class="rules">
      <h2 class="rules__title">Правила купівлі:</h2>
      <ul class="rules__list">
        <li v-for="(rule, index) in rulesList" :key="index" class="rules__item">{{ rule }}</li>
      </ul>
    </div>
  </second-master-page>
</template>

<script>
import SecondMasterPage from "@/masterpages/SecondMasterPage.vue";
import { mapGetters } from "vuex";
export default {
  name: 'RulesView',
  components: {
    SecondMasterPage,
  },
  computed: {
    ...mapGetters('contacts', ['rulesList'])
  },
}
</script>

<style lang="scss" scoped></style>