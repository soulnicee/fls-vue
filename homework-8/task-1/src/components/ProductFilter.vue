<template>
  <div class="category">
    <div v-for="category in categoryList" :key="category.id" class="category__item" @click="onChooseCategory(category.id)">
      <div class="category__image">
        <img :src="category.imgUrl">
      </div>
      <div class="category__name">{{ category.name }}</div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: 'ProductFilter',
  computed: {
    ...mapGetters(['categoryList'])
  },
  methods: {
    ...mapActions(['loadCategoryList', 'onChooseCategory'])
  },
  created() {
    this.loadCategoryList()
  },
}
</script>

<style lang="scss" scoped>
.category {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  text-align: center;



  // .category__item
  &__item {
    cursor: pointer;
    border: 2px solid transparent;
    border-radius: 5px;

    @media (any-hover: hover) {
      &:hover {
        border: 2px solid green;
      }
    }
  }

  // .category__image
  &__image {
    &:not(:last-child) {
      margin-bottom: 10px;
    }

    width: 250px;

    img {
      width: 100%;
    }
  }

  // .category__name
  &__name {
    font-size: 20px;
    color: blueviolet;
    font-weight: 700;
  }
}
</style>