import React from "react";
import classes from "./Input.css";

const input = props => {
  let inputElement = null;

  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          className={classes.inputElement}
          {...props.elementConfig}
          value={props.value}
          onChange={props.inputHandleChange}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          className={classes.inputElement}
          {...props.elementConfig}
          value={props.value}
          onChange={props.inputHandleChange}
        />
      );
      break;
    case "select":
      inputElement = (
        <select
          onChange={props.inputHandleChange}
          className={classes.inputElement}
          value={props.value}
        >
          {props.elementConfig.options.map(option => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;
    default:
      inputElement = (
        <input
          onChange={props.inputHandleChange}
          className={classes.inputElement}
          {...props.elementConfig}
          value={props.value}
        />
      );
  }
  // console.log(props);
  return (
    <div>
      <label className={classes.Label}>{props.label}</label>
      {inputElement}
    </div>
  );
};
export default input;
