import React from "react";

import type { Entity } from "../../misc/types";

import { EditableTitle } from "./sub-components/EditableTitle";

interface CardProps extends Entity {
  onTitleUpdate: (updatedTitle: string) => void;
}

export const Card: React.FC<CardProps> = ({
  Title,
  Year,
  imdbID,
  onTitleUpdate,
  // TODO Type,
  // TODO Poster
}) => {
  const date = Year.trim();

  return (
    <div>
      <EditableTitle {...{ title: Title, onTitleUpdate }} />
      <div>{date}</div>
      <div>{imdbID}</div>
    </div>
  );
};

export default Card;
