import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import { ContactData } from "./ContactData";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("ContactData component", () => {
  test("renders", () => {
    const wrapper = shallow(<contactData />);

    expect(wrapper.exists()).toBe(true);
  });

  test("When the form is submitted the event is cancelled", () => {
    const wrapper = shallow(<contactData />);
    let prevented = false;
    wrapper.find("form").simulate("submit", {
      preventDefault: () => {
        prevented = true;
      }
    });
    expect(prevented).toBe(true);
  });
});

//test if input renders and form works
