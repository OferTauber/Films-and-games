import React from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "../misc/useStore";

import { useParams, useNavigate, Navigate } from "react-router-dom";

import { Entity } from "../misc/types";
import { Img, Button } from "../ui-components";
import { formatYear } from "../misc/utils";

const UnconnectedDetails: React.FC<Entity> = ({
  Poster,
  Title,
  Type,
  Year,
  imdbID,
}) => {
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate("/");
  };

  return (
    <div className="container-sm">
      <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
        <div>
          <Img
            {...{
              src: Poster,
              alt: Title,
              className: "img-fluid ",
            }}
          />
        </div>
        <div className="col">
          <ul className="list-group">
            <li className="list-group-item">
              {Type} name: <strong>{Title}</strong>
            </li>
            <li className="list-group-item">
              Date of publishing: <strong>{formatYear(Year)}</strong>
            </li>
            <li className="list-group-item">
              IMDB identification: <strong>{imdbID}</strong>
            </li>
          </ul>
        </div>
        <div className="col">
          <Button {...{ onClick: handleReturn, label: "Back" }} />
        </div>
      </div>
    </div>
  );
};

const StoreConnected = () => {
  const { data, openErrorToast } = useStore();
  const { id } = useParams<{ id: string }>();

  const selectedEntity = data.find(({ imdbID }) => imdbID === id);

  if (!selectedEntity) {
    openErrorToast("Something went wrong");
    return <Navigate to={"/"} />;
  }

  return <UnconnectedDetails {...{ ...selectedEntity }} />;
};

export const Details = observer(StoreConnected);

export default Details;
