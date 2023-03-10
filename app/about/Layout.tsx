"use client";
import React from "react";
import PageTitle from "app/components/PageTitle";
import SlidingText from "./components/slidingtext";
import { PageWrapper } from "../components/page-wrapper";
import { LayoutProps } from "../interfaces/LayoutProps";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <PageWrapper>
      <div className="flex row justify-start items-center">
        <PageTitle text={"About Me"} />
        <div className="relative flex h-screen w-full flex-col bg-blk justify-start text-white items-start p-20">
          <SlidingText />
          {children}
        </div>
      </div>
    </PageWrapper>
  );
};

export default Layout;
