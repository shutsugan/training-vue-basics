<template>
  <button @click="count++">Counter {{ count }}</button>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
};
</script>

<style></style>
