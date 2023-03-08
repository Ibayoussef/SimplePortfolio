import React from "react";
import SlidingText from "./components/slidingtext";

function RootLayout({ children }) {
  return (
    <>
      {children}
      <SlidingText />
    </>
  );
}

export default RootLayout;
