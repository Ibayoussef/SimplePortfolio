import React from "react";
import Button from "../Button";
import { Project } from "app/work/Interfaces/Project";

type CardButtonProps = Pick<Project, "url">;

const CardButton: React.FC<CardButtonProps> = ({ url }) => {
  return <Button link={url}>Visit</Button>;
};

export default CardButton;
