<template>
  <div class="item" :class="{ 'choosen': choosenShop === shopItem.id }" @click="$emit('chooseShop', shopItem.id)"> {{ shopItem.name }}</div>
</template>

<script>
export default {
  name: 'ShopItem',
  props: {
    shopItem: {
      type: Object,
      required: true
    },
    choosenShop: {
      required: true
    },
  }
}
</script>

<style lang="scss" scoped></style>