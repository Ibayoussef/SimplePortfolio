import { LayoutProps } from "app/interfaces/LayoutProps";
import React from "react";

interface CardBodyProps extends LayoutProps {}

const CardBody: React.FC<CardBodyProps> = ({ children }) => {
  return (
    <div className="relative h-full w-full bg-[#504745] max-lg:flex-col overflow-hidden rounded-xl flex justify-center items-center p-4">
      {children}
    </div>
  );
};

export default CardBody;
