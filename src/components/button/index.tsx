import React from "react";
import "./styles.scss";

type ButtonProps = {
  text: string;
  size: string;
  icon?: string;
};

export default function Button({ text, icon, size }: ButtonProps) {
  return (
    <button className={`${size} button-component`}>
      {icon && <i className={icon} />}
      <span>{text}</span>
    </button>
  );
}
