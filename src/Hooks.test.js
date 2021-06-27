import { shallowMount } from "@vue/test-utils";
import Hooks from "./Hooks.vue";

test("Should display the date of mount", (done) => {
  const wrapper = shallowMount(Hooks);
  Date.now = jest.fn(() => 1624821891631);

  wrapper.vm.$nextTick(() => {
    expect(wrapper.findComponent({ ref: "mount" }).text()).toBe(
      "Sun Jun 27 2021"
    );
    done();
  });
});

test("Should increament updateTimes on updated", (done) => {
  const wrapper = shallowMount(Hooks);

  expect(wrapper.vm.$data.updateTimes).toBe(0);
  wrapper.findComponent({ ref: "update" }).trigger("click");

  wrapper.vm.$nextTick(() => {
    expect(wrapper.vm.$data.updateTimes).toBe(1);
    done();
  });
});
