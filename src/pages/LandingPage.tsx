import React from "react";

import { Cards, Nav } from "../store-connected-components";

export const LandingPage: React.FC = () => {
  return (
    <main style={{ display: "flex" }}>
      <Nav />
      {/* <Cards /> */}
    </main>
  );
};

export default LandingPage;
