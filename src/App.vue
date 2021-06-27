<template>
  <div id="app"></div>
</template>

<script>
// create a components folder which will contain the components

//1. create a component that expect a message prop and displays it
//2. create a component that expect a number which should be used as an initial state for the counter
// and by clicking the button the count should increament without mutating the prop
//3. create a component that expect a list a prop and displays the items

export default {
  name: "App",
  data() {
    return {
      message: "The message to be dispalyed",
      initValue: 5,
      list: ["item 1", "item 2", "item 2"],
    };
  },
};
</script>

<style></style>
