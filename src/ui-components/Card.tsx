import React from "react";

import type { Entity } from "../utils/types";

interface CardProps extends Entity {
  onTitleUpdate: (newTitle: string) => void;
}

export const Card: React.FC<CardProps> = ({
  Title,
  Year,
  imdbID,
  // Type,
  // Poster
}) => {
  const date = Year.trim();

  return (
    <div>
      <h6>{Title}</h6>
      <div>{date}</div>
      <div>{imdbID}</div>
    </div>
  );
};

export default Card;
