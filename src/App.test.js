import { shallowMount } from "@vue/test-utils";
import App from "./App.vue";

test("Should contain the right length of elements", () => {
  const wrapper = shallowMount(App);

  expect(wrapper.findAll(".number")).toHaveLength(5);
});

test("Should render the props of the list", () => {
  const wrapper = shallowMount(App);

  expect(
    wrapper
      .findAll(".item")
      .at(0)
      .text()
  ).toBe("The name");
  expect(
    wrapper
      .findAll(".item")
      .at(1)
      .text()
  ).toBe("30");
  expect(
    wrapper
      .findAll(".item")
      .at(2)
      .text()
  ).toBe("some address");
});
