<template>
  <div class="subjects">
    <h1 class="subjects__title">Вибір уроків</h1>
    <ol v-if="subjectsList.length" class="subjects__list">
      <li v-for="subject in subjectsList" :key="subject.id" class="subject-checkbox">
        <label :for="subject.id" class="subject-checkbox__label">{{ subject.name }}</label>
        <input :id="subject.id" v-model="selectedSubjects" class="subject-checkbox__input" type="checkbox" :value="subject.id">
      </li>
    </ol>
    <div v-else class="empty-list">Сталася помилка. Зачекайте трошки!</div>
    <div v-if="errorMessage" class="empty-list">{{ errorMessage }}</div>
    <button type="button" class="subjects__btn" @click="click">Підтвердити вибір</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'SubjectsView',
  data() {
    return {
      selectedSubjects: [],
      errorMessage: ''
    }
  },
  computed: {
    ...mapGetters('subjects', ['subjectsList']),
    errorMessege() {
      return !this.subjectsList.length ? 'Сталася помилка. Зачекайте трошки!' : 'Потрібно вибрати принаймні 1 урок'
    },

  },
  methods: {
    showError() {
      this.errorMessage = 'Потрібно вибрати принаймні 1 урок'
      setTimeout(() => {
        this.errorMessage = ''
      }, 5000);
    },
    click() {
      if (this.selectedSubjects.length) {
        this.$router.push({
          name: 'select_teachers',
          params: {
            lessonsId: this.selectedSubjects
          }
        })
      } else {
        this.showError()
      }
      console.log(this.selectedSubjects);
    }
  },
}
</script>

<style lang="scss" scoped>
.subjects {
  margin: 0 auto;
  text-align: center;
  padding: 10px 10px 50px 10px;

  // .subjects__title
  &__title {
    font-size: 26px;

    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }

  // .subjects__list
  &__list {
    display: flex;
    flex-direction: column;
    align-items: center;

    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }

  &__btn {
    font-size: 18px;
    padding: 5px 20px;
    border-radius: 5px;
    cursor: pointer;
    background-color: #d6d190;
    transition: all 0.3s;

    @media (any-hover: hover) {
      &:hover {
        background-color: #98e983;
      }
    }
  }
}
</style>