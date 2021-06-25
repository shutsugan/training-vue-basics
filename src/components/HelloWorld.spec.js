import { shallowMount } from "@vue/test-utils";
import HelloWorld from "./HelloWorld.vue";

test("displays message", () => {
  const msg = "Hello";
  const wrapper = shallowMount(HelloWorld, {
    propsData: { msg },
  });

  // Assert the rendered text of the component
  expect(wrapper.text()).toContain(msg);
});
