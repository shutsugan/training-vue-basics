<template>
  <div id="app"></div>
</template>

<script>
export default {
  //1. create a two way binding input
  //2. create a checkbox that displays false/true when toggeled (init state should be unchecked)
  //3. create a Multiple checkboxs using the checknames array (list rendring)
  //4. create a two radio button to change the picked state
  //5. create a select to change the selected state
  //6. create a multi select to change the multiSelected state and display the result joined by comma
  name: "App",
  data() {
    return {
      message: "",
      checked: false,
      checkedNames: [],
      picked: "",
      selected: "",
      multiSelected: [],
    };
  },
};
</script>

<style></style>
