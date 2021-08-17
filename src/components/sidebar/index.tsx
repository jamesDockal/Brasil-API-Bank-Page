import React from "react";
import Logo from "../../images/whitelogo.png";

import "./styles.scss";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <img src={Logo} alt="logo" />
      <div className="page-icons">
        <i className="material-icons-outlined ui">home</i>
        <i className="fas fa-bullhorn"></i>
        <i className="material-icons-outlined ui">people</i>
        <i className="material-icons-outlined ui">person_outline</i>
      </div>
      <span className="material-icons-outlined logout ">logout</span>
    </div>
  );
}
