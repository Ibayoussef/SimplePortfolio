"use client";
import React from "react";
import PageTitle from "app/components/PageTitle";
import { PageWrapper } from "../components/page-wrapper";
import { LayoutProps } from "../interfaces/LayoutProps";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <PageWrapper>
      <div className="flex row justify-start items-center">
        <PageTitle text={"About Me"} />
        {children}
      </div>
    </PageWrapper>
  );
};

export default Layout;
