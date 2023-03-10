import React from "react";
import Image from "next/image";
import { Project } from "app/work/Interfaces/Project";

type CardImageProps = Pick<Project, "image">;

const CardImage: React.FC<CardImageProps> = ({ image }) => {
  return (
    <Image
      src={image}
      width={500}
      height={400}
      className="card-image w-[300px] h-[300px] object-contain"
      alt="project_img"
    />
  );
};

export default CardImage;
