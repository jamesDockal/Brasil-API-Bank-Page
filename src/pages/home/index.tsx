import React from "react";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";
import "./styles.scss";

export default function Home() {
  return (
    <div className="home-page">
      <div>
        <Sidebar />
      </div>
      <div className="home-header">
        <Header title="Bancos" buttonIcon="" buttonTitle="Criar Banco" />
      </div>
    </div>
  );
}
