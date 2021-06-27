<template>
  <div id="app">
    <calc
      :number="number"
      :powerOfNumber="powerOfNumber"
      @power-of="changeState"
    />
  </div>
</template>

<script>
//1. create a component that a number prop, when clicking on the calculate button
// the result should be returned to App to set powerOfNumber state that should be used as a prop
// to be display in the component

import Calc from "./Calc.vue";
export default {
  name: "App",
  components: { Calc },
  data() {
    return {
      number: 3,
      powerOfNumber: 0,
    };
  },
  methods: {
    changeState(value) {
      this.powerOfNumber = value;
    },
  },
};
</script>

<style></style>
