<template>
  <div class="main-list">
    <aplicants-list />
  </div>
</template>

<script>
import AplicantsList from "@/components/AplicantsList/";
export default {
  name: 'AplicantsView',
  components: {
    AplicantsList,
  },
}
</script>

<style lang="scss" scoped></style>