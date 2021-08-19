import React from "react";
import "./styles.scss";

import { useHistory } from "react-router-dom";

type BankType = {
  personCount: number;
  name: string;
  ispb: string;
  code: string;
};

type BankCardProps = {
  bank: BankType;
  index: number;
};

export default function BankCard({ bank, index }: BankCardProps) {
  const history = useHistory();

  function goToBackBankPage() {
    history.push(`/disparos/detalhes/${bank.code}`);
  }

  return (
    <div onClick={() => goToBackBankPage()} className="bank-card">
      <header className="card-header">
        {index < 7 ? (
          <div className="shoot-now">
            <span>Disparando agora...</span>
            <i className="fas fa-arrow-right" />
          </div>
        ) : index == 7 ? (
          <div className="shoot-past">
            <i className="far fa-clock"></i>
            <span>12/08/2020 - 18:30</span>
          </div>
        ) : (
          <div className="shoot-toopast">
            <i className="fas fa-check-double" />
            <span>12/06/2020</span>
          </div>
        )}
        <div className="bank-users">
          <i className="fas fa-users"></i>
          23
        </div>
        <i className="fas fa-ellipsis-v ellipsis" />
      </header>
      <main className="card-main">
        <div className="megaphone">
          <i className="fas fa-bullhorn" />
        </div>
        <div className="bank-info">
          <span>{bank.name}</span>
          <span className="ifsb">IFSB: {bank.ispb}</span>
        </div>
      </main>
    </div>
  );
}
