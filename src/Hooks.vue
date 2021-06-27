<template>
  <div>
    <button ref="update" @click="handleUpdate">Update</button>
    <div ref="mount">{{ mountTime }}</div>
    <div>{{ count }}</div>
  </div>
</template>

<script>
export default {
  name: "hooks",
  data() {
    return {
      mountTime: "",
      count: 0,
      updateTimes: 0,
    };
  },
  mounted() {
    this.mountTime = new Date().toDateString();
  },
  updated() {
    this.updateTimes++;
  },
  methods: {
    handleUpdate() {
      this.count++;
    },
  },
};
</script>

<style></style>
