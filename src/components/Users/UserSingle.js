import React, { useEffect, Fragment, useContext } from "react";
import Spinner from "../Layout/Spinner";

import { Link } from "react-router-dom";
import Repos from "../Repo/Repos";
import GitHubContext from "../../Context/gitHub/GithubContext";

const UserSingle = ({ match }) => {
  const gitHubContext = useContext(GitHubContext);

  const { getUser, getUserRepo, repos, user, loading } = gitHubContext;
  useEffect(() => {
    getUser(match.params.login);
    getUserRepo(match.params.login);
    //eslint-disable-next-line
  }, []);

  const {
    name,
    avatar_url,
    html_url,
    bio,
    login,
    company,
    blog,
    location,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  if (loading) {
    return <Spinner />;
  }
  return (
    <Fragment>
      <Link to="/" className="btn btn-light">
        Back To Home
      </Link>
      Hireable{" "}
      {hireable ? (
        <i className="fa fa-check text-success" />
      ) : (
        <i className="fa fa-times-circle text-danger" />
      )}
      <div className="card grid-2">
        <div className="all-center">
          <img
            src={avatar_url}
            className="round-img"
            style={{ width: "200px" }}
            alt=""
          />
          <h1>{name}</h1>
          <p>Location: {location}</p>
        </div>
        <div>
          {bio && (
            <Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
            </Fragment>
          )}
          <a href={html_url} className="btn btn-dark my-1">
            Visit Github Profile
          </a>
          <ul>
            <li>
              {login && (
                <Fragment>
                  <strong>Username:</strong> {login}
                </Fragment>
              )}
            </li>
            <li>
              {login && (
                <Fragment>
                  <strong>Company:</strong> {company}
                </Fragment>
              )}
            </li>
            <li>
              {login && (
                <Fragment>
                  <strong>Blog:</strong> {blog}
                </Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="card text-center">
        <div className="badge badge-primary">Followers: {followers}</div>
        <div className="badge badge-success">Following: {following}</div>
        <div className="badge badge-light">Public Repo: {public_repos}</div>
        <div className="badge badge-dark">Public Gists: {public_gists}</div>
      </div>
      <Repos repos={repos} />
    </Fragment>
  );
};

export default UserSingle;
