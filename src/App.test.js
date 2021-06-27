import { shallowMount } from "@vue/test-utils";
import App from "./App.vue";

test("Should render a reserved list", () => {
  const wrapper = shallowMount(App);
  const list = [1, 2, 3, 4, 5];
  expect(wrapper.vm.$data.list).toEqual(list);
  expect(wrapper.vm.reversedList).toEqual([...list].reverse());
});

test("Should display and set the correct name", (done) => {
  const wrapper = shallowMount(App);
  const name = "Jogn Doe";
  const wrapperWithName = wrapper.findComponent({ ref: "name" });

  expect(wrapper.vm.getFullName).toBe(name);
  expect(wrapperWithName.text()).toBe(name);

  wrapper.findComponent({ ref: "compute-name" }).trigger("click");

  wrapper.vm.$nextTick(() => {
    const reversedName = name
      .split(" ")
      .reverse()
      .join(" ");
    expect(wrapper.vm.getFullName).toBe(reversedName);
    expect(wrapperWithName.text()).toBe(reversedName);
    done();
  });
});

test("Should change state to true when name is changed", (done) => {
  const wrapper = shallowMount(App);
  const wrapperChanged = wrapper.findComponent({ ref: "name-changed" });
  const wrapperInput = wrapper.findComponent({ ref: "set-name" });

  expect(wrapperChanged.text()).toBe("Name changed: false");

  wrapperInput.element.value = "new Name";
  wrapperInput.trigger("input");

  wrapper.vm.$nextTick(() => {
    console.log(wrapper.vm.$data.changed);
    expect(wrapperChanged.text()).toBe("Name changed: true");
    done();
  });
});
