import React from "react";
import { Cards, Nav, Controllers } from "../store-connected-components";
import "./LandingPage.css";

export const LandingPage: React.FC = () => {
  return (
    <div className="container-lg">
      <main className="main-layout">
        <Nav />
        <div className="content-area">
          <Controllers />
          <Cards />
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
