import { shallowMount } from "@vue/test-utils";
import List from "./List.vue";

test("Should render the list using the prop", () => {
  const list = ["item 1", "item 2", "item 3"];
  const wrapper = shallowMount(List, { propsData: { list } });

  expect(wrapper.exists()).toBeTruthy();
  expect(wrapper.props("list")).toBe(list);

  expect(wrapper.findAllComponents({ ref: "items" })).toHaveLength(list.length);
});
