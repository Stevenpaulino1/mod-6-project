import React, { Component } from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";

class Checkout extends Component {
  state = {
    ingredients: {
      salad: 1,
      meat: 2,
      bacon: 3,
      cheese: 4
    }
  };
  render() {
    return (
      <div>
        <checkoutSummary ingredients={this.state.ingredients} />
      </div>
    );
  }
}

export default Checkout;
