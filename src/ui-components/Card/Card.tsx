import React from "react";
import { useNavigate } from "react-router-dom";
import type { Entity, View } from "../../misc/types";
import { EditableTitle } from "./sub-components/EditableTitle";
import { formatYear } from "../../misc/utils";
import { Img } from "../index";

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

  const isList = view === "flex";

  return (
    <div
      className={`card ${
        isList
          ? "d-flex flex-row list align-items-center"
          : "d-flex flex-column gallery align-items-center"
      } h-100`}
    >
      <Img
        {...{
          src: Poster,
          alt: Title,
          className: `${
            isList ? "img-thumbnail mr-3" : "img-fluid mb-2"
          } cursor-pointer`,

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
