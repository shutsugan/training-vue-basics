<template>
  <div>
    <button ref="calc" @click="CalculatePower">
      Calculate power of {{ number }}
    </button>
    <br />
    <div ref="power-result">{{ powerOfNumber }}</div>
  </div>
</template>

<script>
export default {
  name: "calc",
  props: {
    number: {
      type: Number,
      default: 0,
    },
    powerOfNumber: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    CalculatePower() {
      this.$emit("power-of", this.number ** this.number);
    },
  },
};
</script>

<style></style>
