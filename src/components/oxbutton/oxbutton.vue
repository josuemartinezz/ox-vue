<template>
  <button
    v-on="listeners"
    :class="[`ox-btn-${this.getColor}`, { outline: outline, square: square }]"
  >
    <slot></slot>
    <div class="ox-btn-loading" v-if="loading"></div>
  </button>
</template>

<script>
export default {
  name: "oxbutton",
  data() {
    return {};
  },
  props: {
    outline: {
      type: Boolean,
      default: false,
    },
    square: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: "null",
    },
    loading: {
      type: Boolean,
      default: false,
    },
    to: {
      type: String,
      default: null,
    },
  },
  computed: {
    listeners() {
      return {
        click: (event) => this.click(event),
      };
    },
    getColor() {
      if (this.color.charAt(0) != "#") {
        return `${this.color}`;
      } else {
        return null;
      }
    },
  },
  methods: {
    click() {
      this.$emit("click");
      this.to != null ? this.$router.push(this.to) : "";
    },
    hexToRGBA(hex, opacity) {
      return (
        "rgba(" +
        (hex = hex.replace("#", ""))
          .match(new RegExp("(.{" + hex.length / 3 + "})", "g"))
          .map(function (l) {
            return parseInt(hex.length % 2 ? l + l : l, 16);
          })
          .concat(isFinite(opacity) ? opacity : 1)
          .join(",") +
        ")"
      );
    },
  },
};
</script>

<style lang="less" scoped>
@import "./oxbutton.less";
</style>