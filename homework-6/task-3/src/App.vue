<template>
  <my-input v-model:vUserMail.check="userInput" :default-domain="defaultDomain" />
</template>

<script>
import MyInput from "./components/MyInput.vue";

export default {
  name: "App",
  data() {
    return {
      userInput: null,
      defaultDomain: '@inv.mn.edu',
    }
  },
  components: {
    MyInput,
  },
};
</script>

<style lang="scss"></style>
