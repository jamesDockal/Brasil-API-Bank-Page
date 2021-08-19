import React from "react";
import "./styles.scss";

type BankType = {
  personCount: number;
  title: string;
  ispb: string;
  date: string;
};

type BankCardProps = {
  bank: BankType;
};

export default function BankCard({ bank }: BankCardProps) {
  return (
    <div className="bank-card">
      <header className="card-header">
        {bank.date == "now" ? (
          <div className="shoot-now">
            <span>Disparando agora...</span>
            <i className="fas fa-arrow-right" />
          </div>
        ) : bank.date == "past" ? (
          <div className="shoot-past">
            <i className="far fa-clock"></i>
            <span>12/08/2020 - 18:30</span>
          </div>
        ) : (
          <div className="shoot-toopast">
            <i className="fas fa-check-double" />
            <span>{bank.date}</span>
          </div>
        )}
        <div className="bank-users">
          <i className="fas fa-users"></i>
          {bank.personCount}
        </div>
        <i className="fas fa-ellipsis-v ellipsis" />
      </header>
      <main className="card-main">
        <div className="megaphone">
          <i className="fas fa-bullhorn" />
        </div>
        <div className="bank-info">
          <span>{bank.title}</span>
          <span className="ifsb">IFSB: {bank.ispb}</span>
        </div>
      </main>
    </div>
  );
}
