<template>
  <div class="list">
    <div class="list__empty" v-if="!shopsList.length">Список порожній</div>
    <shop-item v-else v-for="shop in shopsList" :key="shop.id" :shop-item="shop" @choose-shop="onShopChoose" :choosen-shop="choosenShop" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import ShopItem from "@/components/ShopItem.vue";
export default {
  name: 'ShopList',
  components: {
    ShopItem,
  },
  computed: {
    ...mapGetters(['shopsList', 'choosenShop'])
  },
  methods: {
    ...mapActions(['onShopChoose'])
  },
}
</script>

<style lang="scss" scoped></style>