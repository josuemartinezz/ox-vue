<template>
  <span>
    <span
      v-if="flat"
      :class="[`bg-${getColor}-400 hover:bg-${getColor}-500`]"
      class="text-xs rounded-lg inline-flex justify-center items-center text-white py-1 px-2"
    >
      <slot></slot>
    </span>
    <span v-if="!flat">
      <div class="inline-flex justify-center items-center text-xs">
        <div
          class="h-2 w-2 mr-2 rounded-full"
          :class="[`bg-${getColor}-400 hover:bg-${getColor}-500`]"
        ></div>
        <slot></slot>
      </div>
    </span>
  </span>
</template>

<script>
export default {
  name: "ox-badge",
  props: {
    color: { type: String },
    flat: { type: Boolean, default: false },
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