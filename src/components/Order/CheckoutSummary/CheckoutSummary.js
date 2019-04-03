import React from "react";

import Burger from "../../components/Burger/Burger";
import Button from "../UI/Button/Button";

import classes from "./CheckoutSummary.css";

const checkoutSummary = props => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>Hope you enjoy the burger!</h1>
      <div style={{ width: "100%", margin: auto }} />
      <Burger ingrediants={props.ingredients} />
      <Button btnType="Danger" clicked={props.purchaseCancelled}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={props.purchaseContinued}>
        CONTINUE
      </Button>
    </div>
  );
};

export default checkoutSummary;
