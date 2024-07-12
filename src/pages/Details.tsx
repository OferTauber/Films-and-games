import React from "react";
import { useParams, useNavigate } from "react-router-dom";

export const Details: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>Details Page</h1>
      <p>ID: {id}</p>
      <button onClick={handleReturn}>Return to Home</button>
    </div>
  );
};

export default Details;
