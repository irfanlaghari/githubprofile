import {
  Serach_User,
  Get_User,
  Clear_User,
  Get_Repos,
  Set_Loading,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case Serach_User:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };

    case Set_Loading:
      return {
        ...state,
        loading: true,
      };
    case Clear_User:
      return {
        ...state,
        users: [],
        loading: false,
      };
    case Get_User:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };

    case Get_Repos:
      return {
        ...state,
        repos: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
