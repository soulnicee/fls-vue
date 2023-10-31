<template>
  <user-info v-model:vName.checkName.checkAge="userName" v-model:vAge.checkAge="userAge" />
</template>

<script>
import UserInfo from "@/components/UserInfo.vue";

export default {
  name: "App",
  components: {
    UserInfo
  },
  data() {
    return {
      userName: null,
      userAge: null
    }
  },
};
</script>

<style lang="scss"></style>
