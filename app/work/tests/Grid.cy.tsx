import React from "react";
import Grid from "../components/Grid";

describe("<Grid />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Grid />);
  });
});
