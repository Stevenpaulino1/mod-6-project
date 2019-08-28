import reducer from "./burgerBuilder";
import * as actionTypes from "../actions/actionTypes";

describe("burger reducer", () => {
  it("should return initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      ingredients: null,
      totalPrice: 4,
      error: false,
      building: false
    });
  });
});
