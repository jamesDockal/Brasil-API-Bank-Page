import React from "react";
import Button from "../button";
import "./styles.scss";

type HeaderProps = {
  title: string;
  buttonTitle: string;
  buttonIcon: string;
};

export default function Header({
  title,
  buttonTitle,
  buttonIcon,
}: HeaderProps) {
  return (
    <div className="page-header">
      <h1> {title}</h1>
      <div className="user-actions">
        <Button size="small" text={buttonTitle} icon="fas fa-plus" />
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
