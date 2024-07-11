import React from "react";

import Nav from "../store-connected-components/Nav";

export const LandingPage: React.FC = () => {
  return (
    <main style={{ display: "flex" }}>
      <Nav />
    </main>
  );
};

export default LandingPage;
