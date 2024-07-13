import React from "react";
import { useNavigate } from "react-router-dom";
import type { Entity, View } from "../../misc/types";
import { EditableTitle } from "./sub-components/EditableTitle";
import { formatYear } from "../../misc/utils";
import fallbackImg from "../../misc/image_not_found.jpg";

interface CardProps extends Entity {
  onTitleUpdate: (updatedTitle: string) => void;
  view: View;
}

export const Card: React.FC<CardProps> = ({
  Title,
  Year,
  imdbID,
  Poster,
  onTitleUpdate,
  view,
}) => {
  const date = formatYear(Year);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/${imdbID}`);
  };

  const [isError, setIserror] = React.useState(false);
  const isList = view === "flex";

  const src = isError ? fallbackImg : Poster;

  return (
    <div
      className={`card ${isList ? "d-flex flex-row align-items-center" : "d-flex flex-column align-items-center"} h-100`}
    >
      <img
        {...{
          src,
          alt: Title,
          className: `${isList ? "img-thumbnail mr-3" : "img-fluid mb-2"} cursor-pointer`,
          onError: () => setIserror(true),
          onClick: handleNavigate,
          width: 150,
        }}
      />
      <div className="card-body">
        <EditableTitle {...{ title: Title, onTitleUpdate }} />

        <div>{date}</div>
      </div>
    </div>
  );
};

export default Card;
