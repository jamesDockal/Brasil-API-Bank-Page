import React, { useState, useEffect } from "react";
import BankUtils from "../../utils/Bank";
import BankCard from "../bankCard";
import Input from "../input";
import "./styles.scss";

const { mockBanks } = new BankUtils();

type BankType = {
  personCount: number;
  title: string;
  ispb: string;
  date: string;
};

export default function AllBanks() {
  const [banks, setBanks] = useState<BankType[]>([]);

  useEffect(() => {
    setBanks(mockBanks());
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
            size="medium"
            placeholder="Digite o nome do banco"
            icon="fas fa-search"
          />
        </div>
      </header>
      <main>
        {banks.map((bank) => (
          <BankCard bank={bank} />
        ))}
      </main>
    </div>
  );
}
