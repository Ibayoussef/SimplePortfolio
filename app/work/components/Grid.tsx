"use client";

import "swiper/css";
import ProjectCard from "./ProjectCard";
import { Project } from "../Interfaces/Project";
import { projects } from "./projects.json";
export default function Grid() {
  return (
    <div className="w-full h-full">
      <div className="flex flex-row flex-wrap place-content-center place-items-center h-fit w-full gap-8 p-4">
        {projects.map((project: Project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
}
