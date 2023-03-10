import React from "react";
import RootLayout from "../../layout";

describe("<RootLayout />", () => {
  it("renders", () => {
    cy.mount(<RootLayout>something</RootLayout>);
  });
});
