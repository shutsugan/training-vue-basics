<template>
  <div>
    <ul>
      <li ref="items" v-for="item in list" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "list",
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style></style>
