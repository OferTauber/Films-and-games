import React, { useEffect } from "react";
import "./App.css";

import { observer } from "mobx-react-lite";
import { useStore } from "./utils/useStore";

import { Loader } from "./ui-components/Loader";
import LandingPage from "./pages/LandingPage";

interface AppProps {
  isLoading: boolean;
}

const App: React.FC<AppProps> = ({ isLoading }) => {
  if (isLoading) {
    return <Loader />;
  }

  return <LandingPage />;
};

const Observed = observer(App);

const StoreConnected = () => {
  const { isLoading, getData } = useStore();

  useEffect(() => {
    getData();
  }, [getData]);

  return <Observed {...{ isLoading }} />;
};

export default observer(StoreConnected);
