import React, { useState, useContext } from "react";
import GitHubContext from "../../Context/gitHub/GithubContext";
import AlertContext from "../../Context/Alert/AlertContext";

const Search = () => {
  const gitHubContext = useContext(GitHubContext);
  const alertContext = useContext(AlertContext);
  const [text, setText] = useState(" ");

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === " ") {
      alertContext.setAlert(" Please Type Something", "light");
    } else {
      gitHubContext.searchUser(text);
      setText(" ");
    }
  };
  return (
    <div>
      <form className="form" onSubmit={onSubmit}>
        <input
          type="text"
          name="text"
          placeholder="Serach For User"
          value={text}
          onChange={onChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {gitHubContext.users.length > 0 && (
        <button
          className="btn btn-light btn-block"
          onClick={gitHubContext.clearUser}
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
