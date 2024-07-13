import React from "react";

import { ToastProps } from "../../misc/types";

export const Toast: React.FC<ToastProps> = ({ message, variant }) => {
  return (
    <div className="toast-container position-fixed top-0 end-0 p-3">
      <div
        id="liveToast"
        className="toast fade show"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div className="toast-header m-2">
          <strong className={`me-auto text-${variant}`}>
            {variant === "warning" ? "❗ " : "✅ "}
            {message}
          </strong>
        </div>
      </div>
    </div>
  );
};
