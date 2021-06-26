<template>
  <div id="app">
    <button ref="click-event" @click="counter++">{{ counter }}</button>
    <form
      ref="form"
      @submit.prevent="() => (submitMessage = 'submit without refresh')"
    >
      <div ref="submit-message">{{ submitMessage }}</div>
      <button type="submit">submit</button>
    </form>
    <button
      ref="ctrl-click"
      v-on:click.ctrl="displayHiddenMessage = !displayHiddenMessage"
    >
      Do something
    </button>
    <div ref="hidden-element" v-show="displayHiddenMessage">
      Should be display after ctrl click combination
    </div>
  </div>
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
