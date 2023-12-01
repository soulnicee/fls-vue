<template>
  <second-master-page>
    <div class="contacts">
      <h2 class="contacts__title">Наші контакти</h2>
      <ul class="contacts__list">
        <li class="contacts__item">Адреса магазину: біля будинку Баби Галі</li>
        <li class="contacts__item">Дід Петро</li>
        <li class="contacts__item">онука Софійка</li>
      </ul>
    </div>
  </second-master-page>
</template>

<script>
import SecondMasterPage from "@/masterpages/SecondMasterPage.vue";
export default {
  name: 'ContactsView',
  components: {
    SecondMasterPage,
  },
}
</script>

<style lang="scss" scoped></style>