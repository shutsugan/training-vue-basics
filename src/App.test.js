import { shallowMount } from "@vue/test-utils";
import App from "./App.vue";

let wrapper;

beforeAll(() => (wrapper = shallowMount(App)));

test("Should have two way binding on input", (done) => {
  const value = "two ways data binding";
  const wrapperInput = wrapper.findComponent({ ref: "input" });
  const wrapperInputMessage = wrapper.findComponent({ ref: "input-message" });

  expect(wrapperInputMessage.text()).toBe("input message:");

  wrapperInput.element.value = value;
  wrapperInput.trigger("input");

  wrapper.vm.$nextTick(() => {
    expect(wrapperInputMessage.text()).toBe(`input message: ${value}`);
    done();
  });
});

test("Should toggle checkbox when clicked", (done) => {
  const wrapperChecbox = wrapper.findComponent({ ref: "checkbox" });
  const wrapperCheckboxLabel = wrapper.findComponent({ ref: "checkbox-label" });

  expect(wrapperCheckboxLabel.text()).toBe("false");

  wrapperChecbox.trigger("click");

  wrapper.vm.$nextTick(() => {
    expect(wrapperCheckboxLabel.text()).toBe(`true`);
    done();
  });
});

test("Should render multi checkboxes that will change data on check", (done) => {
  const wrapperCheckbox1 = wrapper.findComponent({ ref: "checkobx-multi-1" });
  const wrapperCheckbox2 = wrapper.findComponent({ ref: "checkobx-multi-2" });

  expect(wrapper.vm.$data.checkedNames).toEqual([]);

  wrapperCheckbox1.trigger("click");
  wrapperCheckbox2.trigger("click");

  wrapper.vm.$nextTick(() => {
    expect(wrapper.vm.$data.checkedNames.length).toBe(2);
    done();
  });
});

test("Should render two radio buttons that change the data picked", (done) => {
  const wrapperRadioA = wrapper.findComponent({ ref: "radio-a" });

  expect(wrapper.vm.$data.picked).toBe("");

  wrapperRadioA.trigger("click");
  wrapper.vm.$nextTick(() => {
    expect(wrapper.vm.$data.picked).toBe("A");
    done();
  });
});

test("Should render a select to change the data selected", (done) => {
  const wrapperSelect = wrapper
    .findComponent({ ref: "select" })
    .findAll("option");
  const selectMessage = wrapper.findComponent({ ref: "select-message" });

  expect(selectMessage.text()).toBe("Selected:");

  wrapperSelect.at(1).setSelected();
  wrapper.vm.$nextTick(() => {
    expect(selectMessage.text()).toBe("Selected: A");
    done();
  });
});

test("Should render a multi select to chagne the data selected", (done) => {
  const wrapperSelectMulti = wrapper
    .findComponent({ ref: "select-multi" })
    .findAll("option");
  const wrapperSelectMultiMessage = wrapper.findComponent({
    ref: "select-multi-message",
  });

  expect(wrapperSelectMultiMessage.text()).toBe("types:");

  wrapperSelectMulti.at(1).setSelected();
  wrapperSelectMulti.at(2).setSelected();

  wrapper.vm.$nextTick(() => {
    expect(wrapperSelectMultiMessage.text()).toBe("types: radio, input");
    done();
  });
});
