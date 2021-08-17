import React from "react";
import AllBanks from "../../components/banks";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";
import "./styles.scss";

export default function Home() {
  return (
    <div className="home-page">
      <div>
        <Sidebar />
      </div>
      <div className="home-content">
        <Header title="Bancos" buttonIcon="" buttonTitle="Criar Banco" />
        <AllBanks />
      </div>
    </div>
  );
}
