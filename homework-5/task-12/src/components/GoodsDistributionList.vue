<template>
  <div class="list">
    <div class="list__empty" v-if="!goodsDistributionList.length">Список порожній</div>
    <div class="goods" v-else>
      <ul class="goods__list" v-for="shop in goodsDistributionList" :key="shop.id"> {{ shop.shopName }} <li class="goods__item"
          v-for="(goods, index) in shop.goods" :key="index"> {{ goods }} </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "GoodsDistributionList",
  computed: {
    ...mapGetters(['goodsDistributionList'])
  },
}
</script>

<style lang="scss" scoped></style>