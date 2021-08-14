import React from "react";
import "./styles.scss";

type InputProps = {
  placeholder: string;
  icon?: any;
  name?: string;
};

export default function Input({ placeholder, icon, name }: InputProps) {
  return (
    <div className="input-component">
      <input name={name} type="text" placeholder={placeholder} />
      {icon && <i className={icon} />}
    </div>
  );
}
