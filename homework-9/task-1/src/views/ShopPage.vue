<template>
  <div class="shop">
    <h3 class="shop__title">Список товарів</h3>
    <ul class="shop__list">
      <li v-for="item in productCategory" :key="item.id" class="shop__item" @click="onChooseCategory(item.category)">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: 'ShopPage',
  computed: {
    ...mapGetters(['productCategory']),
  },
  methods: {
    ...mapActions(['loadProductCategory']),
    onChooseCategory(category) {
      this.$router.push({
        name: 'product',
        params: {
          category
        }
      })
    }
  },
  created() {
    this.loadProductCategory()
  },
}
</script>

<style lang="scss" scoped>
.shop {

  // .shop__title
  &__title {}

  // .shop__list
  &__list {}

  // .shop__item
  &__item {
    cursor: pointer;
    font-size: 20px;

    &:not(:last-child) {
      margin-bottom: 10px;
    }

    @media (any-hover: hover) {
      &:hover {
        color: red;
      }
    }
  }
}
</style>