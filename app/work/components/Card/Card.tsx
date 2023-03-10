import React from "react";
import CardBody from "./CardBody";
import CardImage from "./CardImage";
import CardTitle from "./CardTitle";
import CardDescription from "./CardDescription";
import CardContent from "./CardContent";
import CardButton from "./CardButton";
import { LayoutProps } from "app/interfaces/LayoutProps";

interface CardProps extends LayoutProps {}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="card bg-[#4d4d4d3c] p-4 h-fit rounded-xl">{children}</div>
  );
};

export default Object.assign(Card, {
  Title: CardTitle,
  Image: CardImage,
  Content: CardContent,
  Body: CardBody,
  Description: CardDescription,
  Button: CardButton,
});
