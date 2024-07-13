import React from "react";

interface ButtonProps {
  onClick: () => void;
  label: string;
}

export const Button: React.FC<ButtonProps> = ({ onClick, label }) => {
  return (
    <button className="btn btn-primary rounded-pill px-4" onClick={onClick}>
      {label}
    </button>
  );
};
