import React from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/${imdbID}`);
  };

  return (
    <div>
      <EditableTitle {...{ title: Title, onTitleUpdate }} />
      <div>{date}</div>
      <div>{imdbID}</div>
      <button onClick={handleNavigate}>Go to Details</button>
    </div>
  );
};

export default Card;
