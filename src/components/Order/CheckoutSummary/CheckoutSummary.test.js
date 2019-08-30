import { mount } from "enzyme";
import sinon from "sinon";
import checkoutSummary from "./checkoutSummary";

describe("<checkoutSummary/>", () => {
  it("simulates click events", () => {
    const checkoutContinued = sinon.spy();
    const wrapper = mount(<checkoutSummary clicked={checkoutContinued} />);
    wrapper.find("button").simulate("click");
    expect(checkoutContinued).to.have.property("btnType", 1);
  });
});
