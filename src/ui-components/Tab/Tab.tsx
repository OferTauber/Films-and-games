import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

export interface TabProps {
  label: string;
  value: string;
  isActive?: boolean;
  onClick: (value: string) => void;
}

export const Tab: React.FC<TabProps> = ({
  label,
  value,
  isActive,
  onClick,
}) => {
  const className = `nav-link ${isActive ? "active" : ""}`;

  return (
    <button {...{ onClick: () => onClick(value), className }}>{label}</button>
  );
};
