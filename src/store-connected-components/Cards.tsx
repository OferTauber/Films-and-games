import React from "react";

import { observer } from "mobx-react-lite";

import { useStore } from "../misc/useStore";

import { Entity } from "../misc/types";

import { Card as SingleCard } from "../ui-components/Card";

interface CardsProps {
  data: Entity[];
}

const UnconnectedCards: React.FC<CardsProps> = ({ data }) => {
  const onTitleUpdate = (str: string) => console.log("TODO - develop " + str);

  return (
    <>
      {data.map(({ imdbID, Title, Type, Year, Poster }) => (
        <SingleCard
          key={imdbID}
          {...{ imdbID, Title, Type, onTitleUpdate, Year, Poster }}
        />
      ))}
    </>
  );
};

const StoreConnected = () => {
  const { filteredData } = useStore();

  return <UnconnectedCards {...{ data: filteredData }} />;
};

export const Cards = observer(StoreConnected);

export default Cards;
