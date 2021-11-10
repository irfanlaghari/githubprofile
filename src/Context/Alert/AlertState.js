import React, { useReducer } from "react";
import AlertContext from "./AlertContext";
import AlertReducer from "./AlertReducer";
import { Set_Alert, Remove_Alert } from "../types";

const AlertState = (props) => {
  const initialState = null;
  const [state, dispatch] = useReducer(AlertReducer, initialState);

  //Set Alert
  const setAlert = (msg, type) => {
    dispatch({
      type: Set_Alert,
      payload: { msg, type },
    });

    setTimeout(() => {
      dispatch({
        type: Remove_Alert,
      });
    }, 2000);
  };

  return (
    <AlertContext.Provider
      value={{
        alert: state,
        setAlert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
