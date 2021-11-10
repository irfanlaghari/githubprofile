import { Set_Alert, Remove_Alert } from "../types";

export default (state, action) => {
  switch (action.type) {
    case Set_Alert:
      return action.payload;
    case Remove_Alert:
      return null;
    default:
      return state;
  }
};
