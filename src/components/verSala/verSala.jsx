import React from "react";
import HeaderIrSala from "../headerIrSala/headerIrSala";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import BodyVerSala from "./../bodyVerSala/bodyVerSala";

class VerSala extends React.Component {
  render() {
    return (
      <div>
        <HeaderIrSala />
        <BodyVerSala />
      </div>
    );
  }
}

export default VerSala;
