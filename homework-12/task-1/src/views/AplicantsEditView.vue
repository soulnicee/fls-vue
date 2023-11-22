<template>
  <div class="editor">
    <h1 class="editor__title">{{ dynamicTitle }}</h1>
    <div class="editor__items">
      <div class="editor__item">
        <label class="editor__label" for="aplicant-name">ПІБ кандидата</label>
        <input v-model="aplicantData.name" id="aplicant-name" autocomplete="off" type="text" class="editor__input">
      </div>
      <div class="editor__item">
        <label class="editor__label" for="aplicant-profession">Професія</label>
        <select v-model="aplicantData.professionId" id="aplicant-profession" class="editor__select">
          <option v-for="prof in professionsList" :key="prof.id" :value="prof.id" class="editor__option">{{ prof.name }}</option>
        </select>
      </div>
      <div class="editor__item">
        <label class="editor__label" for="aplicant-exp">Досвід роботи на позиції</label>
        <input v-model="aplicantData.experience" id="aplicant-exp" autocomplete="off" type="number" class="editor__input">
      </div>
    </div>
    <div v-if="isDataSelected === false" class="editor__error"> дані не введено </div>
    <div class="editor__buttons">
      <router-link :to="{ name: 'aplicants' }" class="editor__btn editor__back-btn">Повернутися назад</router-link>
      <button type="button" class="editor__btn editor__action-btn" @click="onAction">{{ dynamicButtonTitle }}</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { isObjectEmpty } from "@/utilities/utils.js";
export default {
  name: 'AplicantsEditView',
  props: {
    aplicantId: {
      type: Number,
      required: true
    },
  },
  data() {
    return {
      aplicantData: {},
      isDataSelected: null
    }
  },
  computed: {
    ...mapGetters(['professionsList']),
    ...mapGetters('aplicants', ['getAplicantById']),
    dynamicTitle() {
      return this.aplicantId ? 'Редагувати дані кандидата' : 'Додайте нового кандидата'
    },
    dynamicButtonTitle() {
      return this.aplicantId ? 'Зберегти зміни' : 'Додати'
    }
  },
  created() {
    this.aplicantData = { ...this.getAplicantById(this.aplicantId) }
  },
  methods: {
    ...mapActions('aplicants', ['addNewAplicant', 'updateCurrentAplicant']),
    onAction() {
      if (isObjectEmpty(this.aplicantData)) {
        this.isDataSelected = false
        return
      }
      !this.aplicantId ? this.addNewAplicant(this.aplicantData) : this.updateCurrentAplicant(this.aplicantData)
      this.isDataSelected = null
      this.$router.push({ name: 'aplicants' })
    }
  },
}
</script>

<style lang="scss" scoped></style>