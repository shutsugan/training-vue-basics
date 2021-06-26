import { shallowMount } from "@vue/test-utils";
import App from "./App.vue";

let wrapper;

beforeAll(() => (wrapper = shallowMount(App)));

test("Should increament button text on click", (done) => {
  const wrapperWithIncreamentClick = wrapper.findComponent({
    ref: "click-event",
  });

  expect(wrapperWithIncreamentClick.text()).toBe("0");
  wrapperWithIncreamentClick.trigger("click");

  wrapper.vm.$nextTick(() => {
    expect(wrapperWithIncreamentClick.text()).toBe("1");
    done();
  });
});

test("Should display a hidden message after ctrl plus click", (done) => {
  const wrapperWithCtrlPlusClick = wrapper.findComponent({
    ref: "ctrl-click",
  });

  const wrapperHiddenElement = wrapper.findComponent({ ref: "hidden-element" });

  expect(wrapperHiddenElement.isVisible()).toBeFalsy();

  wrapperWithCtrlPlusClick.trigger("click", { ctrlKey: true });

  wrapper.vm.$nextTick(() => {
    expect(wrapperHiddenElement.isVisible()).toBeTruthy();
    done();
  });
});

test("Should set submit message when the form is submited", (done) => {
  const wrapperForm = wrapper.findComponent({ ref: "form" });
  const wrapperSubmitMessage = wrapper.findComponent({ ref: "submit-message" });

  expect(wrapperSubmitMessage.text()).toBe("");

  wrapperForm.trigger("submit");

  wrapper.vm.$nextTick(() => {
    expect(wrapperSubmitMessage.text()).toBe("submit without refresh");
    done();
  });
});
