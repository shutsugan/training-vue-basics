import { shallowMount } from "@vue/test-utils";
import Counter from "./Counter.vue";

test("Should have the correct init value increament the state and keep the prop unchanged", (done) => {
  const initValue = 5;
  const wrapper = shallowMount(Counter, { propsData: { initValue } });

  expect(wrapper.exists()).toBeTruthy();
  expect(wrapper.props("initValue")).toBe(initValue);

  wrapper.findComponent({ ref: "counter" }).trigger("click");

  wrapper.vm.$nextTick(() => {
    expect(wrapper.vm.$data.count).toBe(6);
    expect(wrapper.props("initValue")).toBe(initValue);
    done();
  });
});
