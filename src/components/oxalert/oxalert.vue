<template>
  <div
    :class="[
      'ox-alert',
      `alert-${color}`,
      flat ? `ox-alert-flat` : '',
      outline ? `ox-alert-outline` : '',
    ]"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "oxalert",
  props: {
    color: {
      type: String,
      default: null,
    },
    flat: {
      type: Boolean,
      default: false,
    },
    outline: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="less" scoped>
@import "./oxalert.less";
</style>