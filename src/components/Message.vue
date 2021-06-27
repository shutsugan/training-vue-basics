<template>
  <div>{{ message }}</div>
</template>

<script>
export default {
  name: "message",
  props: {
    message: {
      type: String,
      default: "",
    },
  },
};
</script>

<style></style>
