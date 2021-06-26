import { shallowMount } from "@vue/test-utils";
import App from "./App.vue";

let wrapper;

beforeAll(() => (wrapper = shallowMount(App)));

test("Should contains active when the active state is set", (done) => {
  const state = "active";
  wrapper.setData({ state });
  wrapper.vm.$nextTick(() => {
    expect(wrapper.findComponent({ ref: "active" }).classes()).toContain(state);
    done();
  });
});

test("Should contains error when the active error is set", (done) => {
  const state = "error";
  wrapper.setData({ state });
  wrapper.vm.$nextTick(() => {
    expect(wrapper.findComponent({ ref: "error" }).classes()).toContain(state);
    done();
  });
});

test("SShould contains disabled when the active disabled is set", (done) => {
  const state = "disabled";
  wrapper.setData({ state });
  wrapper.vm.$nextTick(() => {
    expect(wrapper.findComponent({ ref: "disabled" }).classes()).toContain(
      state
    );
    done();
  });
});

test("SShould contains error-disabled when the active error-disabled is set", (done) => {
  const state = "error-disabled";
  wrapper.setData({ state });
  wrapper.vm.$nextTick(() => {
    expect(
      wrapper.findComponent({ ref: "error-disabled" }).classes("error")
    ).toBeTruthy();

    expect(
      wrapper.findComponent({ ref: "error-disabled" }).classes("disabled")
    ).toBeTruthy();
    done();
  });
});
