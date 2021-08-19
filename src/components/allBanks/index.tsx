import React, { useState, useEffect } from "react";
import BankCard from "../bankCard";
import Input from "../input";
import "./styles.scss";
import axios from "axios";

type BankType = {
  personCount: number;
  name: string;
  ispb: string;
  code: string;
};

export default function AllBanks() {
  const [banks, setBanks] = useState<BankType[]>([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    async function getAllBanks() {
      const { data } = await axios.get("https://brasilapi.com.br/api/banks/v1");
      setBanks(data);
      console.log("banks", data);
    }

    getAllBanks();
  }, []);

  return (
    <div className="all-banks">
      <header className="allbanks-header">
        <div className="banks-count">
          <h1>Bancos</h1>
          <small>324 bancos</small>
        </div>
        <div>
          <Input
            state={search}
            setState={setSearch}
            size="medium"
            placeholder="Digite o nome do banco"
            icon="fas fa-search"
          />
        </div>
      </header>
      <main className="bank-card-container">
        {banks.map((bank, index) => (
          <BankCard index={index} bank={bank} />
        ))}
      </main>
    </div>
  );
}
