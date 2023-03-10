import React from "react";
import { Project } from "app/work/Interfaces/Project";

type CardDescriptionProps = Pick<Project, "desc">;

const CardDescription: React.FC<CardDescriptionProps> = ({ desc }) => {
  return (
    <h1 className="card-description text-base w-full text-custom-white">{`${desc}`}</h1>
  );
};

export default CardDescription;
