<template>
  <div id="app">
    <div ref="items" v-for="item in reversedList" :key="item">{{ item }}</div>
    <div ref="name">{{ getFullName }}</div>
    <input ref="set-name" v-model="name" />
    <button ref="compute-name" @click="changeName">Change name</button>
    <br />
    <div ref="name-changed">Name changed: {{ changed }}</div>
  </div>
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
  computed: {
    reversedList() {
      return [...this.list].reverse();
    },
    getFullName: {
      get() {
        return this.name;
      },
      set(newName) {
        const [first, last] = newName.split(" ");
        this.name = `${last ?? ""} ${first ?? ""}`.trim();
      },
    },
  },
  watch: {
    getFullName() {
      this.changed = true;
    },
  },
  methods: {
    changeName() {
      this.getFullName = this.name;
    },
  },
};
</script>

<style></style>
