import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Users({ user: { login, avatar_url } }) {
  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        alt=""
        style={{ width: "60px" }}
        className="round-img"
      />
      <h3>{login}</h3>
      <div>
        <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">
          More
        </Link>
      </div>
    </div>
  );
}

Users.propTypes = {
  user: PropTypes.object.isRequired,
};
export default Users;
