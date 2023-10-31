<template>
  <my-input v-model:vUserPath.checkPath="userPath" />
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
      userPath: null
    }
  },
};
</script>

<style lang="scss"></style>
