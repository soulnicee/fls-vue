<template>
  <div class="f-form-group f-has-feedback">
    <label for="f-cvv2" class="f-control-label">CVV2</label>
    <input type="tel" maxlength="3" placeholder="XXX" inputmode="numeric" />
    <span class="f-form-control-feedback f-icon f-i-question"></span>
  </div>
</template>

<script>
export default {
  name: "CardCode",
};
</script>

<style lang="scss" scoped></style>
