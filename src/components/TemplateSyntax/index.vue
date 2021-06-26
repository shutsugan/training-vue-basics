<template>
  <div class="tempalte-syntax">
    <div class="msg">should display message: {{ msg }}</div>
    <div class="html" v-html="html" />
    <div class="id" :id="id">this element has an id</div>
    <div class="visible" v-show="visible" @click="toggleElement">
      this element should be toggled on click
    </div>
  </div>
</template>

<script>
// 1. you should use mustache syntax to intepolate msg state
// 2. you should use html directive to render raw html using the html state
// 3. you should use binding directive to set id using the id from the state
// 4. you should conditionaly render (show in the first render) the visible element using the visible state
export default {
  name: "template-syntax",
  data() {
    return {
      msg: "interpolated message",
      html: "<b>Bold Text</b>",
      id: "element-id",
      visible: true,
    };
  },
  methods: {
    toggleElement() {
      this.visible = !this.visible;
    },
  },
};
</script>

<style></style>
