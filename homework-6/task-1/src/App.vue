<template>
  <my-input v-model:vUserAge.check.setColor="userAge" />
</template>

<script>
import MyInput from "./components/MyInput.vue";

export default {
  name: "App",
  components: {
    MyInput,
  },
  data() {
    return {
      userAge: null
    }
  },
};
</script>

<style lang="scss"></style>
