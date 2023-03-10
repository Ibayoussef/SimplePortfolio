import SlidingText from "../components/slidingtext";
import { mount } from "cypress/react18";

describe("Sliding Text tests", () => {
  it("should render", () => {
    mount(<SlidingText />);
    cy.get(".skill-list").should("be.visible");
  });
});
