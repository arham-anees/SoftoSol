import * as React from "react";
import { Container } from "reactstrap";
import NavMenu from "./NavMenu";
import NavBar from "../views/NavBar/NavBar";

export default (props: { children?: React.ReactNode }) => (
  <React.Fragment>
    <div className="row m-1">
      <div className="col-md-3">
        <NavBar />
      </div>
      <div className="col-md-6">{props.children}</div>

      <div className="col-md-3 bg-dark">related things</div>
    </div>
  </React.Fragment>
);
