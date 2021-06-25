import { mount } from "@vue/test-utils";
import App from "../App.vue";

test("Should find a child component that contains first-component as a class name", () => {
  const wrapper = mount(App);

  expect(wrapper.find(".first-component").exists()).toBeTruthy();
});
