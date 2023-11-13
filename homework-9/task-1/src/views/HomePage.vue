<template>
  <div class="home">
    <h1 class="home__title">Цей магазин належить програмісту на фрілансі</h1>
    <div class="home__why">Тому:</div>
    <ul class="home__list">
      <li v-for="(text, index) in mainTextList" :key="index" class="home__item">{{ text }}</li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "HomePage",
  computed: {
    ...mapGetters(['mainTextList'])
  },
  methods: {
    ...mapActions(['loadProductsList', 'loadMainTextList', 'loadProductCategory'])
  },
  created() {
    this.loadProductsList()
    this.loadMainTextList()
    this.loadProductCategory()
  },
};
</script>
