import React from "react";

import { observer } from "mobx-react-lite";

import { useStore } from "../misc/useStore";
import { Entity } from "../misc/types";

import { Card as SingleCard } from "../ui-components/Card/Card";

interface CardsProps {
  data: Entity[];
  onTitleUpdate: (id: string, updatedTitle: string) => void;
}

const UnconnectedCards: React.FC<CardsProps> = ({ data, onTitleUpdate }) => {
  return (
    <div className="cards">
      {data.map(({ imdbID, Title, Type, Year, Poster }) => {
        const curredOnTitleUpdate = (updatedValue: string) =>
          onTitleUpdate(imdbID, updatedValue);

        return (
          <SingleCard
            key={imdbID}
            {...{
              imdbID,
              Title,
              Type,
              Year,
              Poster,
              onTitleUpdate: curredOnTitleUpdate,
            }}
          />
        );
      })}
    </div>
  );
};

const StoreConnected = () => {
  const { filteredData, onTitleUpdate } = useStore();

  return <UnconnectedCards {...{ data: filteredData, onTitleUpdate }} />;
};

export const Cards = observer(StoreConnected);

export default Cards;
