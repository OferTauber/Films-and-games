import React from "react";

import "./Input.css";

export interface InputProps {
  value: string;
  onChange: (str: string) => void;
  placeholder?: string;
}

export const Input: React.FC<InputProps> = ({
  value,
  onChange,
  placeholder,
}) => {
  return (
    <input
      {...{
        type: "text",
        className: "form-control custom-input px-3",
        value,
        placeholder,
        onChange: (e) => onChange(e.target.value),
      }}
    />
  );
};
