import React, { useContext } from "react";
import Users from "./Users";
import Spinner from "../Layout/Spinner";
import GitHubContext from "../../Context/gitHub/GithubContext";

const User = () => {
  const gitHubContext = useContext(GitHubContext);
  const { users, loading } = gitHubContext;
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {users.map((user) => (
          <Users user={user} key={user.id} />
        ))}
      </div>
    );
  }
};

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3 , 1fr)",
  gridGap: "1rem",
};

export default User;
