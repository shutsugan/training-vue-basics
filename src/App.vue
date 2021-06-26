<template>
  <div class="app">
    <div class="number" v-for="number in numbers" :key="number">
      {{ number }}
    </div>
    <div class="item" v-for="(value, key) of list" :key="key">{{ value }}</div>
  </div>
</template>

<script>
//1. you should render the number list on scrren using the number array
//2. you should render the object value on screen using the list
export default {
  name: "App",
  data() {
    return {
      numbers: [1, 2, 3, 4, 5],
      list: {
        name: "The name",
        age: 30,
        address: "some address",
      },
    };
  },
};
</script>

<style></style>
