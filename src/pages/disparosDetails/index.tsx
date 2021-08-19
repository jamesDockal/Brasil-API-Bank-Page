import React, { useEffect, useState } from "react";
import BankDetails from "../../components/bankDetails";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";
import axios from "axios";
import "./styles.scss";

import { useParams } from "react-router-dom";

type BankType = {
  personCount: number;
  name: string;
  ispb: string;
  code: string;
  fullName: string;
};

type Params = {
  code: string;
};

export default function DisparoDetails() {
  const [errorMessage, setErrorMessage] = useState("");
  const [bank, setBank] = useState<BankType>();

  const params: Params = useParams();

  useEffect(() => {
    async function getBank() {
      setErrorMessage("");
      try {
        const { data } = await axios.get(
          `https://brasilapi.com.br/api/banks/v1/${params.code}`
        );
        setBank(data);
      } catch (e) {
        setErrorMessage(e.response.data.message);
      }
    }
    getBank();
  }, []);

  return (
    <div className="disparos-details-page">
      <Sidebar />
      <div className="details-content">
        <Header
          back
          title={bank?.fullName || ""}
          buttonIcon="fas fa-pen"
          buttonTitle="Editar Banco"
        />
        <BankDetails bank={bank} errorMessage={errorMessage} />
      </div>
    </div>
  );
}
