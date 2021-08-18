import React from "react";
import BankDetails from "../../components/bankDetails";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";
import "./styles.scss";

export default function DisparoDetails() {
  return (
    <div className="disparos-details-page">
      <Sidebar />
      <div className="details-content">
        <Header
          back
          title="Nome do Banco"
          buttonIcon="fas fa-pen"
          buttonTitle="Editar Banco"
        />
        <BankDetails />
      </div>
    </div>
  );
}
