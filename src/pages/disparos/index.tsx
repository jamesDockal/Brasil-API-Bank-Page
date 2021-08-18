import React from "react";
import AllBanks from "../../components/allBanks";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";
import "./styles.scss";

export default function Disparos() {
  return (
    <div className="home-page">
      <div>
        <Sidebar />
      </div>
      <div className="home-content">
        <Header
          title="Bancos"
          buttonIcon="fas fa-plus"
          buttonTitle="Criar Banco"
        />
        <AllBanks />
      </div>
    </div>
  );
}
