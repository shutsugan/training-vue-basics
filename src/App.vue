<template>
  <div id="app">
    <h1>this should be not updated</h1>
    <button v-on:click="incrementCount">Increament</button>
    <p>count {{ count }}</p>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    incrementCount() {
      this.count++;
    },
  },
};
</script>

<style></style>
