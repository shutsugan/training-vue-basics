<template>
  <div id="app">
    <button @click="() => setState('active')">
      Mark as active
    </button>
    <button @click="() => setState('error')">Mark as Error</button>
    <button @click="() => setState('disabled')">
      Mark as Disabled
    </button>

    <div ref="active">
      I Should turn blue whene the state is active
    </div>
    <div ref="error">
      I should turn red whene state is error
    </div>
    <button ref="disabled" @click="() => setState('error-disabled')">
      I Should be disabled whene state is disabled, if enabled on click change
      the state to "error-disabled"
    </button>

    <div ref="error-disabled">
      I should contain error and disable classes whene state is error-disabled
    </div>
  </div>
</template>

<script>
// 1. you should bing the right class with the right element on state change
export default {
  name: "App",
  data() {
    return {
      state: "",
    };
  },
  methods: {
    setState(state) {
      this.state = state;
    },
  },
};
</script>

<style>
.active {
  color: blue;
}

.error {
  color: red;
}

.disabled {
  color: gray;
  opacity: 0.4;
  pointer-events: none;
}
</style>
