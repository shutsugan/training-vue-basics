<template>
  <div class="first-component">{{ message }}</div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      default: "",
    },
  },
};
</script>

<style></style>
