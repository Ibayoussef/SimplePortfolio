import React from "react";
import { ProjectCardProps } from "../Interfaces/ProjectCardProps";
import { motion } from "framer-motion";
import Card from "./Card/Card";
const ProjectCard: React.FC<ProjectCardProps> = ({ project, key }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -250 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{
        delay: 0.5,
        x: { duration: 6 },
        default: { ease: "easeInOut" },
      }}
      className="h-fit"
      key={key}
    >
      <Card>
        <Card.Body>
          <Card.Image image={project.image} />
          <Card.Content>
            <Card.Title name={project.name} />
            <Card.Description desc={project.desc} />
            <Card.Button url={project.url} />
          </Card.Content>
        </Card.Body>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
