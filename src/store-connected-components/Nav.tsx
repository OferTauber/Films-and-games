import React from "react";

import { observer } from "mobx-react-lite";
import { useStore } from "../utils/useStore";

interface NavProps {
  moviesCount: number;
  gamesCount: number;
  seriesCount: number;
}

const Nav: React.FC<NavProps> = ({ moviesCount, gamesCount, seriesCount }) => {
  return (
    <nav>
      <div>{`Movies(${moviesCount})`}</div>
      <div>{`Games(${gamesCount})`}</div>
      <div>{`Series(${seriesCount})`}</div>
    </nav>
  );
};

const Observed = observer(Nav);

const StoreConnected = () => {
  const { moviesCount, seriesCount, gamesCount } = useStore();

  return <Observed {...{ moviesCount, gamesCount, seriesCount }} />;
};

export default StoreConnected;
