import { shallowMount } from "@vue/test-utils";
import Calc from "./Calc.vue";

test("Should display the power value on emit", (done) => {
  const wrapper = shallowMount(Calc);

  wrapper.findComponent({ ref: "calc" }).trigger("click");
  wrapper.vm.$nextTick(() => {
    expect(wrapper.emitted()["power-of"]).toBeTruthy();
    done();
  });
});
