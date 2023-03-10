"use client";
import React from "react";
import { PageWrapper } from "app/components/page-wrapper";
import PageTitle from "app/components/PageTitle";
import { LayoutProps } from "../interfaces/LayoutProps";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <PageWrapper>
      <div className="flex row justify-start items-center max-sm:w-full">
        <PageTitle text={"My Work"} />
        {children}
      </div>
    </PageWrapper>
  );
};

export default Layout;
