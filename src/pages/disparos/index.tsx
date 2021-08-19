import React from "react";
import AllBanks from "../../components/allBanks";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";
import SquareLogo from "../../images/squarelogo.png";
import "./styles.scss";

export default function Disparos() {
  return (
    <div className="home-page">
      <div className="side-bar">
        <Sidebar />
      </div>
      <div className="home-content">
        <div className="home-header">
          <img className="square-logo" src={SquareLogo} alt="logo" />
          <Header
            title="Bancos"
            buttonIcon="fas fa-plus"
            buttonTitle="Criar Banco"
          />
        </div>

        <AllBanks />
      </div>
    </div>
  );
}
