"use client";
import React from "react";
import { PageWrapper } from "./components/page-wrapper";
import Image from "next/image";
function page() {
  return (
    <PageWrapper>
      <div className="flex row justify-start items-start bg-custom-white">
        <div className="flex max-lg:hidden h-screen w-1/2 column justify-center items-center">
          <Image
            src="/images/img.png"
            className="w-full "
            width={300}
            height={700}
            quality={100}
            alt="figure"
          />
        </div>
        <div className="flex h-screen w-1/2 column justify-center items-center max-lg:w-full max-lg:mt-[-100px]">
          <Image
            src="/images/title.svg"
            width={700}
            height={1000}
            alt="title"
          />
        </div>
      </div>
    </PageWrapper>
  );
}

export default page;
