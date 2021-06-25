import { mount } from "@vue/test-utils";
import App from "../App.vue";

test("Should mount and render the component", () => {
  const wrapper = mount(App);

  expect(wrapper.find(".first-component").exists()).toBeTruthy();
});
