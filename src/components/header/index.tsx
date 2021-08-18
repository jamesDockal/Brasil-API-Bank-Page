import React from "react";
import Button from "../button";
import "./styles.scss";

type HeaderProps = {
  title: string;
  buttonTitle: string;
  buttonIcon: string;
  back?: boolean;
};

export default function Header({
  title,
  buttonTitle,
  buttonIcon,
  back,
}: HeaderProps) {
  return (
    <div className="page-header">
      <div className="page-title">
        {back && <i className="fas fa-chevron-left" />}
        <h1>{title}</h1>
      </div>
      <div className="user-actions">
        <Button size="small" text={buttonTitle} icon={buttonIcon} />
        <div className="bell">
          <i className="far fa-bell"></i>
          <div className="ball" />
        </div>
        <div className="hi-user">
          <span>Olá, </span>
          <span className="username">Beleza Rara</span>
          <i className="fas fa-chevron-down down-arrow " />
        </div>
      </div>
    </div>
  );
}
