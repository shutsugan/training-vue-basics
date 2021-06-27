<template>
  <button ref="counter" @click="count++">{{ count }}</button>
</template>

<script>
export default {
  name: "counter",
  props: {
    initValue: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      count: this.initValue,
    };
  },
};
</script>

<style></style>
