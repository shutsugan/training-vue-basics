import { shallowMount } from "@vue/test-utils";
import FirstComponent from "../components/FirstComponent";

test("Should mount and render the component", () => {
  const wrapper = shallowMount(FirstComponent);

  expect(wrapper.exists()).toBeTruthy();
});

test("Should render the component with the right passed prop", () => {
  const message = "First component test";
  const wrapper = shallowMount(FirstComponent, { propsData: { message } });

  expect(wrapper.props("message")).toBe(message);
});
