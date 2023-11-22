<template>
  <div class="editor">
    <h1 class="editor__title">{{ dynamicTitle }}</h1>
    <div class="editor__items">
      <div class="editor__item">
        <label class="editor__label" for="interview-worker">Працівник</label>
        <select id="interview-worker" v-model="interviewData.workerId" class="editor__select">
          <option v-for="item in filteredWorkersList" :key="item.id" :value="item.id" class="editor__option">{{ item.name }}</option>
        </select>
      </div>
      <div class="editor__item">
        <label class="editor__label" for="interview-aplicant">Кандидат</label>
        <select id="interview-aplicant" v-model="interviewData.aplicantId" class="editor__select">
          <option v-for="item in filteredAplicantsList" :key="item.id" :value="item.id" class="editor__option">{{ item.name }}</option>
        </select>
      </div>
      <div class="editor__item">
        <label class="editor__label" for="interview-day">День</label>
        <select id="interview-day" v-model="interviewData.dayId" class="editor__select">
          <option v-for="item in daysList" :key="item.id" :value="item.id" class="editor__option">{{ item.name }} </option>
        </select>
      </div>
    </div>
    <div v-if="isDataSelected === false" class="editor__error"> дані не введено </div>
    <div class="editor__buttons">
      <router-link :to="{ name: 'interviews' }" class="editor__btn editor__back-btn">Повернутися назад</router-link>
      <button type="button" class="editor__btn editor__reset-btn" @click="onReset">Очистити вибрані поля</button>
      <button type="button" class="editor__btn editor__action-btn" @click="onAction">{{ dynamicButtonTitle }}</button>
    </div>
  </div>
  <button type="button" class="class" @click="ok">Текст</button>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { isObjectEmpty, filterList } from "@/utilities/utils.js";
export default {
  name: 'InterviewsEditView',
  props: {
    interviewId: {
      type: Number,
      required: true
    },
  },
  data() {
    return {
      interviewData: {},
      filteredWorkersList: [],
      filteredAplicantsList: [],
      isDataSelected: null
    }
  },
  computed: {
    ...mapGetters(['daysList']),
    ...mapGetters('workers', ['workersList']),
    ...mapGetters('aplicants', ['aplicantsList']),
    ...mapGetters('interviews', ['getInterviewsById']),
    dynamicTitle() {
      return this.interviewId ? 'Редагувати дані співбесіди' : 'Додайте нову співбесіду'
    },
    dynamicButtonTitle() {
      return this.interviewId ? 'Зберегти зміни' : 'Додати'
    }
  },
  watch: {
    'interviewData.workerId'(newValue) {
      if (newValue) {
        this.filteredAplicantsList = filterList(this.workersList, newValue, this.aplicantsList)
      } else this.filteredAplicantsList = this.aplicantsList
    },
    'interviewData.aplicantId'(newValue) {
      if (newValue) {
        this.filteredWorkersList = filterList(this.aplicantsList, newValue, this.workersList)
      } else this.filteredWorkersList = this.workersList
    },
  },
  created() {
    this.interviewData = { ...this.getInterviewsById(this.interviewId) };

    // Фільтруємо списки для відображення тільки відповідних працівників та кандидатів
    this.filteredWorkersList = filterList(this.aplicantsList, this.interviewData.aplicantId, this.workersList);
    this.filteredAplicantsList = filterList(this.workersList, this.interviewData.workerId, this.aplicantsList);
  },
  methods: {
    onReset() {
      this.interviewData = {}
      this.filteredWorkersList = this.workersList
      this.filteredAplicantsList = this.aplicantsList
      this.isDataSelected = null
    },
    ok() {
      console.log(this.interviewData);
      console.log(this.interviewId);
    },
    ...mapActions('interviews', ['addNewInterview', 'updateCurrentInterview']),
    onAction() {
      if (isObjectEmpty(this.interviewData)) {
        this.isDataSelected = false
        return
      }
      !this.interviewId ? this.addNewInterview(this.interviewData) : this.updateCurrentInterview({
        id: this.interviewId,
        workerId: this.interviewData.workerId,
        aplicantId: this.interviewData.aplicantId,
        dayId: this.interviewData.dayId
      })
      this.isDataSelected = null
      this.$router.push({ name: 'interviews' })
    }
  },
}
</script>

<style lang="scss" scoped></style>