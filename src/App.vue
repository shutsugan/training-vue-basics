<template>
  <div id="app"></div>
</template>

<script>
//1. render the list reversed using computed
//2. create an input with two way binding with an element to display the name trimed
// and also a button that will change the position of first and last name of the new setted name
//3. add a water that will change the state of changed to true when the name is changed
export default {
  name: "App",
  data() {
    return {
      list: [1, 2, 3, 4, 5],
      name: "Jogn Doe",
      changed: false,
    };
  },
};
</script>

<style></style>
