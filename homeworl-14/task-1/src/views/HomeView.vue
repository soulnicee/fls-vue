<template>
  <main-master-page>
    <div class="home"> Сподіваюсь ви не будете чемними і обовязково щось купите </div>
    <template #status>
      <div class="bottom__item"> Власник: Баба Галя </div>
    </template>
  </main-master-page>
</template>

<script>
import MainMasterPage from "@/masterpages/MainMasterPage.vue";
export default {
  name: "HomeView",
  components: {
    MainMasterPage,
  },
};
</script>
