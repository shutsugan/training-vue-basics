<template>
  <div id="app"></div>
</template>

<script>
//1. create a component that a number prop, when clicking on the calculate button
// the result should be returned to App to set powerOfNumber state that should be used as a prop
// to be display in the component

export default {
  name: "App",
  data() {
    return {
      number: 3,
      powerOfNumber: 0,
    };
  },
};
</script>

<style></style>
