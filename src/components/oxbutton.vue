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
button {
  outline: none;
  border: none;
  padding: 9px 18px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 0.7rem;
  display: inline-flex;
  color: white;
  box-shadow: 0px 10px 10px -5px rgba(var(--ox-primary), 0.2);
  transition: all 0.25s ease;
  font-family: "Mulish", sans-serif;
  font-weight: 600;
  position: relative;
  overflow: hidden;
  .ox-btn-loading {
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    background: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: inherit;
    background-color: rgba(14, 15, 24, 0.4);
    &::after {
      content: "";
      position: absolute;
      border-radius: 50%;
      border: 2px solid #fff;
      width: 10px;
      height: 10px;
      border-left: 3px solid transparent;
      border-bottom: 3px solid transparent;
      animation: loading 1s ease infinite;
      z-index: 10;
    }
  }
  &:hover {
    transform: translateY(-1px);
  }
  &.ox-btn-null {
    background-color: rgba(var(--ox-primary));
    color: white;
    box-shadow: 0px 10px 10px -5px rgba(var(--ox-primary), 0.2);
    &.outline {
      background-color: rgba(var(--ox-primary), 0.04);
      color: rgba(var(--ox-primary));
      border: 2px solid rgba(var(--ox-primary), 0.6);
    }
    &.square {
      border-radius: 0px;
    }
  }
  &.ox-btn-primary {
    background-color: rgba(var(--ox-primary));
    color: white;
    box-shadow: 0px 10px 10px -5px rgba(var(--ox-primary), 0.2);
    &.outline {
      background-color: rgba(var(--ox-primary), 0.04);
      color: rgba(var(--ox-primary));
      border: 2px solid rgba(var(--ox-primary), 0.6);
    }
    &.square {
      border-radius: 0px;
    }
  }
  &.ox-btn-danger {
    background-color: rgba(var(--ox-danger));
    color: white;
    box-shadow: 0px 10px 10px -5px rgba(var(--ox-danger), 0.2);
    &.outline {
      background-color: rgba(var(--ox-danger), 0.04);
      color: rgba(var(--ox-danger));
      border: 2px solid rgba(var(--ox-danger), 0.6);
    }
    &.square {
      border-radius: 0px;
    }
  }
  &.ox-btn-success {
    background-color: rgba(var(--ox-success));
    color: white;
    box-shadow: 0px 10px 10px -5px rgba(var(--ox-success), 0.2);
    &.outline {
      background-color: rgba(var(--ox-success), 0.04);
      color: rgba(var(--ox-success));
      border: 2px solid rgba(var(--ox-success), 0.6);
    }
    &.square {
      border-radius: 0px;
    }
  }
  &.ox-btn-warn {
    background-color: rgba(var(--ox-warn));
    color: white;
    box-shadow: 0px 10px 10px -5px rgba(var(--ox-warn), 0.2);
    &.outline {
      background-color: rgba(var(--ox-warn), 0.04);
      color: rgba(var(--ox-warn));
      border: 2px solid rgba(var(--ox-warn), 0.6);
    }
    &.square {
      border-radius: 0px;
    }
  }
  &.ox-btn-dark {
    background-color: rgba(var(--ox-dark));
    color: white;
    box-shadow: 0px 10px 10px -5px rgba(var(--ox-dark), 0.2);
    &.outline {
      background-color: rgba(var(--ox-dark), 0.04);
      color: rgba(var(--ox-dark));
      border: 2px solid rgba(var(--ox-dark), 0.6);
    }
    &.square {
      border-radius: 0px;
    }
  }
}
@keyframes loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>