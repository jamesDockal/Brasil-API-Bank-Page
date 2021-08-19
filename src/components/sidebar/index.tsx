import React from "react";
import Logo from "../../images/whitelogo.png";

import "./styles.scss";

import { useDispatch } from "react-redux";
import { logOut } from "../../store/auth/actions";

export default function Sidebar() {
  const dispatch = useDispatch();

  function logUserOut() {
    dispatch(logOut());
  }

  return (
    <div className="sidebar">
      <img src={Logo} alt="logo" />
      <div className="page-icons">
        <i className="material-icons-outlined ui">home</i>
        <i className="fas fa-bullhorn actived"></i>
        <i className="material-icons-outlined ui">people</i>
        <i className="material-icons-outlined ui">person_outline</i>
      </div>
      <span
        onClick={() => logUserOut()}
        className="material-icons-outlined logout "
      >
        logout
      </span>
    </div>
  );
}
