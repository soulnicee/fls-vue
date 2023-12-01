<template>
  <div>
    <nav>
      <router-link :to="{ name: 'home' }">На головну</router-link>
    </nav>
    <div class="gallery">
      <h2 class="gallery__title"></h2>
      <div class="gallery__items">
        <div class="gallery__item">
          <img src="" alt="" class="gallery__image">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SecondMasterPage'
}
</script>

<style lang="scss" scoped></style>