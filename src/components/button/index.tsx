import React from "react";
import "./styles.scss";

type ButtonProps = {
  text: string;
};

export default function Button({ text }: ButtonProps) {
  return <button>{text}</button>;
}
