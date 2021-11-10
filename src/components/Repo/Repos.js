import React from "react";
import RepoItem from "./ReposItem";

const Repos = ({ repos }) => {
  return (
    <div>
      {repos.map((repo) => (
        <RepoItem repo={repo} key={repo.id} />
      ))}
    </div>
  );
};

export default Repos;
