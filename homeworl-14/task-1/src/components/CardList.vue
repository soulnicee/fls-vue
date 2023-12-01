<template>
  <div class="list">
    <div class="list__container">
      <div class="list__cards">
        <card-item v-for="item in itemsList" :key="item.id" :card-data="item">
          <div v-if="item.icons" class="card__icons">
            <div v-for="icon in item.icons" :key="icon.id" class="card__icon">
              <font-awesome-icon :icon="icon.iconSrc" fade />
            </div>
          </div>
        </card-item>
      </div>
    </div>
  </div>
</template>

<script>
import CardItem from '@/components/CardItem.vue';
export default {
  name: 'CardList',
  components: {
    CardItem,
  },
  props: {
    itemsList: {
      type: Array,
      required: true
    },
  },
}
</script>

<style lang="scss" scoped></style>