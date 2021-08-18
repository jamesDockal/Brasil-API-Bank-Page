import React from "react";
import "./styles.scss";

type InputProps = {
  placeholder: string;
  icon?: any;
  name?: string;
  size: "big" | "medium";
};

export default function Input({ placeholder, icon, name, size }: InputProps) {
  console.log("icone", icon);

  return (
    <div className="input-component">
      <input
        style={{ width: size == "big" ? "400px" : "350px" }}
        name={name}
        type="text"
        placeholder={placeholder}
      />
      {icon && <i className={icon} />}
    </div>
  );
}
