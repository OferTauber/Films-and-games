import React, { useEffect } from "react";
import "./App.css";
import { observer } from "mobx-react-lite";
import { useStore } from "./misc/useStore";
import { Loader } from "./ui-components";
import { useRoutes } from "react-router-dom";
import routes from "./misc/routes";
import { ToastManager } from "./store-connected-components/ToastManager";

interface AppProps {
  isLoading: boolean;
}

const App: React.FC<AppProps> = ({ isLoading }) => {
  const routing = useRoutes(routes);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      {routing}
      <ToastManager />
    </>
  );
};

const Observed = observer(App);

const StoreConnected = () => {
  const { isLoading, getData } = useStore();

  useEffect(() => {
    getData();
  }, [getData]);

  return <Observed isLoading={isLoading} />;
};

export default observer(StoreConnected);
