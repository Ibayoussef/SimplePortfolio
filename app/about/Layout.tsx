"use client";
import PageTitle from "app/components/PageTitle";
import React from "react";
import SlidingText from "./components/slidingtext";
import { PageWrapper } from "..//components/page-wrapper";
import { LayoutProps } from "..//interfaces/LayoutProps";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <PageWrapper>
      <div className="flex row justify-start items-center">
        <PageTitle text={"About Me"} />
        <div className="relative flex h-screen w-full flex-col bg-blk justify-start text-white items-start p-[100px]">
          <SlidingText />
          {children}
        </div>
      </div>
    </PageWrapper>
  );
};

export default Layout;
