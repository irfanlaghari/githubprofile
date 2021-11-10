import React, { useReducer } from "react";
import axios from "axios";
import GitHubContext from "./GithubContext";
import GitHubReducer from "./GitHubReducer";
import {
  Serach_User,
  Get_User,
  Clear_User,
  Get_Repos,
  Set_Loading,
} from "../types";

const GitHubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GitHubReducer, initialState);

  // Search Users
  const searchUser = async (user) => {
    setLoading();

    const res = await axios.get(
      `https://api.github.com/search/users?q=${user}&client_id=${process.env.REACT_APP_GITHUB_CLINT_ID}
         &client_secret=${process.env.REACT_APP_GITHUB_CLINT_SECRET}`
    );
    dispatch({
      type: Serach_User,
      payload: res.data.items,
    });
  };

  //Set_LOading Method
  const setLoading = () => dispatch({ type: Set_Loading });

  // Clear Users from the screen
  const clearUser = () => dispatch({ type: Clear_User });

  //Get Single User
  const getUser = async (username) => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLINT_ID}
       &client_secret=${process.env.REACT_APP_GITHUB_CLINT_SECRET}`
    );

    dispatch({
      type: Get_User,
      payload: res.data,
    });
  };

  //Get User Repositiries
  const getUserRepo = async (username) => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:acs&client_id=${process.env.REACT_APP_GITHUB_CLINT_ID}
           &client_secret=${process.env.REACT_APP_GITHUB_CLINT_SECRET}`
    );
    dispatch({
      type: Get_Repos,
      payload: res.data,
    });
  };

  return (
    <GitHubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUser,
        clearUser,
        getUser,
        getUserRepo,
      }}
    >
      {props.children}
    </GitHubContext.Provider>
  );
};

export default GitHubState;
