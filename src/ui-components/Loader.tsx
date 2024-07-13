import React from "react";

export const Loader: React.FC = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100 vw-100 bg-light position-fixed"
      style={{ top: 0, left: 0 }}
    >
      <div className="spinner-border text-primary" role="status"></div>
    </div>
  );
};

export default Loader;
