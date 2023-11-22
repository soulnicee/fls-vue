<template>
  <div class="editor">
    <h1 class="editor__title"></h1>
  </div>
</template>

<script>
export default {
  name: 'WorkersEditView',
  props: {
    workerId: {
      type: Number,
      required: true
    },
  },
}
</script>

<style lang="scss" scoped></style>