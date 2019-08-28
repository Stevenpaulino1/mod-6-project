import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import { Checkout } from "./Checkout";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("Checkout component", () => {
  test("renders", () => {
    const wrapper = shallow(<checkout />);

    expect(wrapper.exists()).toBe(true);
  });
});
