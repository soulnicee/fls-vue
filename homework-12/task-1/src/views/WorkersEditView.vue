<template>
  <div class="editor">
    <h1 class="editor__title">{{ dynamicTitle }}</h1>
    <div class="editor__items">
      <div class="editor__item">
        <label class="editor__label" for="worker-name">ПІБ працівника</label>
        <input id="worker-name" v-model="workerData.name" autocomplete="off" type="text" class="editor__input">
      </div>
      <div class="editor__item">
        <label class="editor__label" for="worker-profession">Професія</label>
        <select id="worker-profession" v-model="workerData.professionId" class="editor__select">
          <option v-for="prof in professionsList" :key="prof.id" :value="prof.id" class="editor__option">{{ prof.name }}</option>
        </select>
      </div>
      <div class="editor__item">
        <label class="editor__label" for="worker-exp">Досвід роботи на позиції</label>
        <input id="worker-exp" v-model="workerData.experience" autocomplete="off" type="number" class="editor__input">
      </div>
    </div>
    <div v-if="isDataSelected === false" class="editor__error"> дані не введено </div>
    <div class="editor__buttons">
      <router-link :to="{ name: 'workers' }" class="editor__btn editor__back-btn">Повернутися назад</router-link>
      <button type="button" class="editor__btn editor__action-btn" @click="onAction">{{ dynamicButtonTitle }}</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { isObjectEmpty } from "@/utilities/utils.js";
export default {
  name: 'WorkersEditView',
  props: {
    workerId: {
      type: Number,
      required: true
    },
  },
  data() {
    return {
      workerData: {},
      isDataSelected: null
    }
  },
  computed: {
    ...mapGetters(['professionsList']),
    ...mapGetters('workers', ['getWorkerById']),
    dynamicTitle() {
      return this.workerId ? 'Редагувати дані працівника' : 'Додайте нового працівника'
    },
    dynamicButtonTitle() {
      return this.workerId ? 'Зберегти зміни' : 'Додати'
    }
  },
  created() {
    this.workerData = { ...this.getWorkerById(this.workerId) }
  },
  methods: {
    ...mapActions('workers', ['addNewWorker', 'updateCurrentWorker']),
    onAction() {
      if (isObjectEmpty(this.workerData)) {
        this.isDataSelected = false
        return
      }
      !this.workerId ? this.addNewWorker(this.workerData) : this.updateCurrentWorker(this.workerData)
      this.isDataSelected = null
      this.$router.push({ name: 'workers' })
    }
  },
}
</script>

<style lang="scss" scoped></style>