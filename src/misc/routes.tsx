import React from "react";
import { RouteObject } from "react-router-dom";
import { LandingPage } from "../pages";

import { Details } from "../pages/Details";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/:id",
    element: <Details />,
  },
];

export default routes;
