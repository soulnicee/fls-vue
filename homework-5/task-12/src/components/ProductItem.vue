<template>
  <div class="item" :class="{ 'choosen': choosenProduct === productItem.id }" @click="$emit('chooseProduct', productItem)"> {{ productItem.name }}
  </div>
</template>

<script>
export default {
  name: 'ProductItem',
  props: {
    productItem: {
      type: Object,
      required: true
    },
    choosenProduct: {
      required: true
    },
  }
}
</script>

<style lang="scss" scoped></style>