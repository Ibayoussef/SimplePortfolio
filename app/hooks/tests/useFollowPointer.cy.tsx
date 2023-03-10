import { useState, useRef } from "react";
import { useFollowPointer } from "../useFollowPointer";
import { mount } from "cypress/react18";
describe("useFollowPointer hook", () => {
  it("sets the point correctly on pointer move", () => {
    // create a dummy element for the ref

    // create a ref to the dummy element

    // mount a component that uses the hook
    function TestComponent() {
      const ref = useRef(null);

      const point = useFollowPointer(ref);
      return (
        <>
          <div
            ref={ref}
            className="element"
            style={{ position: "absolute", width: 100, height: 100 }}
          ></div>
          <div
            className="test-component"
            style={{
              position: "absolute",
              left: point.x,
              top: point.y,
              width: "10px",
              height: "10px",
              backgroundColor: "red",
            }}
          ></div>
        </>
      );
    }

    // render the component
    mount(<TestComponent />);

    // simulate a pointer move event on the element
    cy.get(".element").trigger("pointermove", {
      clientX: 50,
      clientY: 50,
    });

    // check that the point was set correctly
    cy.get(".test-component")
      .find("div")
      .should("have.css", "left", "0px")
      .should("have.css", "top", "0px");
  });
});
