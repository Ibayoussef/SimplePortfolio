import React from "react";

import { ProjectCardProps } from "../Interfaces/ProjectCardProps";
import ProjectCard from "../components/ProjectCard";
import { mount } from "@cypress/react18";

describe("ProjectCard test", () => {
  const project: ProjectCardProps = {
    project: {
      name: "Test Project",
      desc: "This is a test project.",
      image: "/images/beni1.png",
      url: "https://example.com",
    },
    key: "project",
  };

  it("renders correctly", () => {
    mount(<ProjectCard project={project.project} key={project.key} />);

    cy.get(".card").should("be.visible");
    cy.get(".card-title").should("have.text", " #" + project.project.name);
    cy.get(".card-description").should("have.text", project.project.desc);
    cy.get(".card-image").should(
      "have.attr",
      "src",
      "/_next/image?url=%2Fimages%2Fbeni1.png&w=1080&q=75"
    );
    cy.get(".card-button").should("have.attr", "href", project.project.url);
  });
});
