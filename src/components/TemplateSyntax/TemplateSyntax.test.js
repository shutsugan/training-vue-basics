import { shallowMount } from "@vue/test-utils";
import TemplateSyntax from "./index.vue";

let wrapper;

beforeAll(() => (wrapper = shallowMount(TemplateSyntax)));

test("Should contain the right data", () => {
  expect(wrapper.vm.$data).toEqual({
    msg: "interpolated message",
    html: "<b>Bold Text</b>",
    id: "element-id",
    visible: true,
  });
});

test("Should display the right message", () => {
  expect(wrapper.find(".msg").text()).toBe(
    "should display message: interpolated message"
  );
});

test("Should contain a bold tag", () => {
  const wrapperWithHtml = wrapper.find(".html");
  expect(wrapperWithHtml.contains("b")).toBeTruthy();
  expect(wrapperWithHtml.text()).toBe("Bold Text");
});

test("Should contains the right id attribute", () => {
  expect(wrapper.find(".id").attributes("id")).toBe("element-id");
});

test("Should toggle the element visibility on click", () => {
  const wrapperVisible = wrapper.find(".visible");
  expect(wrapperVisible.text()).toBe("this element should be toggled on click");
  expect(wrapperVisible.isVisible()).toBeTruthy();

  wrapperVisible.trigger("click");
  wrapper.vm.$nextTick(() => expect(wrapperVisible.isVisible()).toBeFalsy());
});
