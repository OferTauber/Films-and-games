import React from "react";

import { observer } from "mobx-react-lite";

import { useStore } from "../misc/useStore";

import { Entity } from "../misc/types";

import { Card as SingleCard } from "../ui-components/Card";

interface CardsProps {
  data: Entity[];
}

const _Cards: React.FC<CardsProps> = ({ data }) => {
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

const Observed = observer(_Cards);

export const Cards = () => {
  const { filteredData } = useStore();

  return <Observed {...{ data: filteredData }} />;
};

export default Cards;
