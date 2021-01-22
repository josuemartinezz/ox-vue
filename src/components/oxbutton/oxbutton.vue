<template>
  <button
    :class="[`bg-${getColor}-400 hover:bg-${getColor}-500`]"
    class="cursor-pointer mr-1 rounded-lg focus:outline-none transition duration-300 py-2 px-3 text-white text-xs"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "ox-button",
  props: {
    color: { type: String },
  },
  computed: {
    getColor() {
      switch (this.color) {
        case "primary":
          return "blue";
        case "warning":
          return "yellow";
        case "error":
          return "red";
        case "success":
          return "green";
        default:
          return "blue";
      }
    },
  },
};
</script>