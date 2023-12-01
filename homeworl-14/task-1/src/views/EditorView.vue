<template>
  <div class="editor">
    <div class="editor__items">
      <div class="editor__item">
        <label>Назва товару</label>
        <input v-model="newProductData.title" type="text" class="editor__input">
      </div>
      <div class="editor__item">
        <label>Ціна товару</label>
        <input v-model="newProductData.price" type="number" class="editor__input">
      </div>
      <div class="editor__item">
        <label>Лінк на фото товару</label>
        <input v-model="newProductData.imageSrc" type="text" class="editor__input">
      </div>
    </div>
    <button type="button" class="editor__button" @click="onAddProduct">Додати товар</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';


export default {
  name: 'EditorView',
  data() {
    return {
      newProductData: {}
    }
  },
  methods: {
    ...mapActions('products', ['addNewProduct']),
    onAddProduct() {
      this.addNewProduct(this.newProductData)
      this.newProductData = {}
    }
  },
}
</script>

<style lang="scss" scoped></style>