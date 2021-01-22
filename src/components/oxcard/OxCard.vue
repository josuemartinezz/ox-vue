<template>
  <div
    class="max-w-xs bg-blue-450 group rounded-lg overflow-hidden shadow-lg cursor-pointer transition duration-300"
  >
    <div class="w-full overflow-hidden">
      <img
        class="w-full max-h-52 object-cover transform transition duration-300 group-hover:scale-105"
        src="https://images.unsplash.com/photo-1611324190899-64438dd49820?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
        alt=""
      />
    </div>
    <div class="p-5">
      <span class="font-semibold">{{ title }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ox-card",
  props: {
    title: { type: String },
  },
};
</script>