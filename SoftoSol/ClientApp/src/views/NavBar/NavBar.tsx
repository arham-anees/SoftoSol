import * as React from "react";
import { Link } from "react-router-dom";

import "./NavBar.scss";

export default () => {
  return (
    <div className="p-4 side-bar">
      <div className=" links-section">
        <Link to="" className="active">
          Home
        </Link>
        <br />
        <Link to="">Blogs</Link>
      </div>
      <div className="title-section">SoftoSol</div>
      <div className="footer-section">footer</div>
    </div>
  );
};
