<template>
  <div class="tempalte-syntax"></div>
</template>

<script>
// 1. you should use mustache syntax to intepolate msg state
// 2. you should use html directive to render raw html using the html state
// 3. you should use binding directive to set id using the id from the state
// 4. you should conditionaly render (show in the first render) the visible element using the visible state

export default {
  name: "template-syntax",
  data() {
    return {};
  },
  methods: {
    toggleElement() {
      this.visible = !this.visible;
    },
  },
};
</script>

<style></style>
