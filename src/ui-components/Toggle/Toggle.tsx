import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Toggle.css";

export interface ToggleProps {
  isChecked: boolean;
  labelLeft?: string;
  labelRight?: string;
  onChange: () => void;
}

export const Toggle: React.FC<ToggleProps> = ({
  isChecked,
  labelLeft,
  labelRight,
  onChange,
}) => {
  return (
    <div
      {...{
        className: "d-flex align-items-center cursor-pointer",
        onClick: onChange,
      }}
    >
      {labelLeft && <span className="me-2 ">{labelLeft}</span>}
      <div className="form-check form-switch">
        <input
          {...{
            className: "form-check-input cursor-pointer",
            type: "checkbox",
            checked: isChecked,
          }}
        />
      </div>
      {labelRight && <span className="ms-2 ">{labelRight}</span>}
    </div>
  );
};

export default Toggle;
