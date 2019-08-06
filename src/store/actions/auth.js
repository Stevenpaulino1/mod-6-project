import axios from "axios";
import * as actionTypes from "./actionTypes";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};
export const authSuccess = authData => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    authData: authData
  };
};
export const authfail = error => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error
  };
};

export const auth = (email, password, method) => {
  return dispatch => {
    dispatch(authStart());
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true
    };
    console.log("AUTHDATA", authData);
    axios
      .post(
        "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyBzPOC32ZvDnQwQ5Aot-uRr256RJGB7xPk",
        authData
      )
      .then(response => {
        console.log(response);
        dispatch(authSuccess(response.data));
      })
      .catch(err => {
        console.log(err);
        dispatch(authfail(err));
      });
  };
};
