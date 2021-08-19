import React, { useEffect, useState } from "react";
import "./styles.scss";

type InputProps = {
  placeholder: string;
  icon?: any;
  name?: string;
  size: "big" | "medium";
  state: any;
  setState: Function;
  type?: string;
};

export default function Input({
  setState,
  state,
  placeholder,
  icon,
  name,
  size,
  type,
}: InputProps) {
  return (
    <div className="input-component">
      <input
        onChange={(e) => setState(e.target.value)}
        required
        value={state}
        className={`${size}-input`}
        name={name}
        type={type}
        placeholder={placeholder}
      />
      {icon && <i className={icon} />}
    </div>
  );
}
