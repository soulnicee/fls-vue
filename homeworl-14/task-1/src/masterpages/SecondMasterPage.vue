<template>
  <div>
    <nav>
      <router-link :to="{ name: 'home' }">На головну</router-link>
    </nav>
    <slot></slot>
    <div class="gallery">
      <h2 class="gallery__title">Галерея</h2>
      <div class="gallery__items">
        <div v-for="image in gallery" :key="image.id" class="gallery__item">
          <img :src="image.link + `?random=${image.id}`" class="gallery__image">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: 'SecondMasterPage',
  computed: {
    ...mapGetters(['gallery'])
  },
}
</script>

<style lang="scss" scoped>
.gallery {

  // .gallery__title
  &__title {}

  // .gallery__items
  &__items {
    display: flex;
    gap: 25px;
  }

  // .gallery__item
  &__item {}

  // .gallery__image
  &__image {}
}
</style>