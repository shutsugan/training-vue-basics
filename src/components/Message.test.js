import { shallowMount } from "@vue/test-utils";
import Message from "./Message.vue";

test("Should display the message passed as prop", () => {
  const message = "the message to be displayed";
  const wrapper = shallowMount(Message, { propsData: { message } });

  expect(wrapper.exists()).toBeTruthy();
  expect(wrapper.props("message")).toBe(message);
});
