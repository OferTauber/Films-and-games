import React from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "../misc/useStore";
import { Entity, View } from "../misc/types";
import { Card as SingleCard } from "../ui-components/Card/Card";

interface CardsProps {
  data: Entity[];
  view: View;
  onTitleUpdate: (id: string, updatedTitle: string) => void;
}

const UnconnectedCards: React.FC<CardsProps> = ({
  data,
  view,
  onTitleUpdate,
}) => {
  const flexOrGridClass = `cards ${view === View.List ? "d-flex flex-column" : "row"}`;

  return (
    <div className={flexOrGridClass}>
      {data.map(({ imdbID, Title, Type, Year, Poster }) => {
        const curredOnTitleUpdate = (updatedValue: string) =>
          onTitleUpdate(imdbID, updatedValue);
        const className = `${view === View.List ? "w-100 mb-3" : "col-sm-6 col-md-4 col-lg-3 mb-3"}`;

        return (
          <div className={className} key={imdbID}>
            <SingleCard
              {...{
                imdbID,
                Title,
                Type,
                Year,
                Poster,
                onTitleUpdate: curredOnTitleUpdate,
                view,
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

const StoreConnected = () => {
  const { filteredData, onTitleUpdate, view } = useStore();

  return <UnconnectedCards {...{ data: filteredData, view, onTitleUpdate }} />;
};

export const Cards = observer(StoreConnected);

export default Cards;
