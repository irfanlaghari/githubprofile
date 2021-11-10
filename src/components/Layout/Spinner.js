import React, { Fragment } from "react";
import Spin from "./spinner.gif";

const Spinner = () => {
  return (
    <Fragment>
      <img
        src={Spin}
        alt="Loading..."
        style={{ width: "200px", display: "block", margin: "auto" }}
      />
    </Fragment>
  );
};

export default Spinner;
