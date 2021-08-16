import React from "react";
import Logo from "../../images/whitelogo.png";
import House from "../../images/House.png";
import Megaphone from "../../images/Megaphone.png";
import Users from "../../images/Users.png";
import Profile from "../../images/profile.png";

import "./styles.scss";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <img src={Logo} alt="logo" />
      <div className="page-icons">
        <span className="material-icons-outlined">home</span>
        <i className="fas fa-bullhorn"></i>
        <span className="material-icons-outlined">people</span>
        <span className="material-icons-outlined">person_outline</span>
      </div>
      <span className="material-icons-outlined logout ">logout</span>
    </div>
  );
}
