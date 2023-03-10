import React from "react";
import { Project } from "app/work/Interfaces/Project";

type CardTitleProps = Pick<Project, "name">;

const CardTitle: React.FC<CardTitleProps> = ({ name }) => {
  return <h1 className="card-title text-2xl text-browny"> {`#${name}`}</h1>;
};

export default CardTitle;
