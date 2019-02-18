import { shallowMount, mount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";

// The describe function is really there to notify us of what is being tested. 
// There should only be one of these in each test file, as we want to maintain a structure where each component has one test suite 
// (basically a group of tests for one component, utility, or whatever).
// It gets passed the callback function test, which groups together assertions (the actual tests) inside its own callback function.
describe('App.vue', () => {
  // As an example, I use the test function to group together assertions which test how a particular element behaves when given various data to render. 
  // Each test file needs at least one test block, or it will not run. The test function also has an alias, it, which you will also commonly see.
  test('is a Vue instance', () => {
    const wrapper = shallowMount(HelloWorld);
    // toBeTruthy matches anything that an if statement treats as true
    // toBeFalsy matches anything that an if statement treats as false
    // toBeNull matches only null
    // https://jestjs.io/docs/en/using-matchers
    expect(wrapper.isVueInstance()).toBeTruthy();
    // The expect function asserts that a particular condition is true. 
    // Jest provides various matchers to test for things like strict equality (toBe), object equality (toEqual), and so on.
    // expect(1).toEqual(1);
  });
});