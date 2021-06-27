<template>
  <div id="app">
    <input ref="input" v-model="message" />
    <span ref="input-message">input message: {{ message }}</span>
    <br />
    <input id="checkbox" ref="checkbox" type="checkbox" v-model="checked" />
    <label ref="checkbox-label" for="checkbox">{{ checked }}</label>
    <br />
    <input
      :ref="`checkobx-multi-1`"
      type="checkbox"
      value="john"
      v-model="checkedNames"
    />
    <label>john</label>
    <input
      :ref="`checkobx-multi-2`"
      type="checkbox"
      value="doe"
      v-model="checkedNames"
    />
    <label>doe</label>
    <br />
    <input type="radio" ref="radio-a" value="A" v-model="picked" />
    <label>A</label>
    <input type="radio" ref="radio-b" value="B" v-model="picked" />
    <label>B</label>
    <br />
    <select ref="select" v-model="selected">
      <option disabled value="">Select a letter</option>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
    <span ref="select-message">Selected: {{ selected }}</span>
    <br />
    <select ref="select-multi" v-model="multiSelected" multiple>
      <option>checkbox</option>
      <option>radio</option>
      <option>input</option>
    </select>
    <br />
    <span ref="select-multi-message">
      types: {{ multiSelected.join(", ") }}
    </span>
  </div>
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
