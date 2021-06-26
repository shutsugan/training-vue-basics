<template>
  <div id="app"></div>
</template>

<script>
//1. Should have a button that will increament on click
//2. Should display a hidden message after ctrl and click combination
//3. Should set a submit message after submitting the form without refreshing to page
export default {
  name: "App",
  data() {
    return {
      counter: 0,
      submitMessage: "",
      displayHiddenMessage: false,
    };
  },
};
</script>

<style></style>
