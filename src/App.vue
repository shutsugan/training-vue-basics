<template>
  <div id="app">
    <first-component message="Text message" />
  </div>
</template>

<script>
import FirstComponent from "./components/FirstComponent";

export default {
  name: "App",
  components: { FirstComponent },
};
</script>

<style></style>
