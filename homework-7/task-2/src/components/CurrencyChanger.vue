<template>
  <select @change="changeCurrency">
    <option v-for="currency in  currencyList " :key="currency.id" :value="currency.id">{{ currency.name }}</option>
  </select>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: 'CurrencyChanger',
  computed: {
    ...mapGetters(['currencyList'])
  },
  methods: {
    ...mapActions(['loadCurrencyList', 'onCurrencyChange']),
    changeCurrency(event) {
      let currencyId = event.target.value
      this.onCurrencyChange(currencyId)
    }
  },
  created() {
    this.loadCurrencyList()
  },
}
</script>

<style lang="scss" scoped></style>