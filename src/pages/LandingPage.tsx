import React from "react";

import { Cards, Nav, Controllers } from "../store-connected-components";

export const LandingPage: React.FC = () => {
  return (
    <main style={{ display: "flex" }}>
      <Nav />
      <Controllers />
      <Cards />
    </main>
  );
};

export default LandingPage;
