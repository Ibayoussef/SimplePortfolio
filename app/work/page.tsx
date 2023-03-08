"use client";
import { PageWrapper } from "app/components/page-wrapper";
import React from "react";
import { Gilda_Display } from "@next/font/google";
import Grid from "./components/Grid";
import { motion } from "framer-motion";
const GildaDisplay = Gilda_Display({
  weight: "400",
  subsets: ["latin"],
});

function Work() {
  const text = "My Work";
  return (
    <PageWrapper>
      <div className="flex row justify-start items-center">
        <div className="flex h-screen w-1/4 flex-col justify-start bg-custom-white items-center">
          <h1 className={"text-5xl h-fit   " + GildaDisplay.className}>2</h1>
          <h1 className="text-3xl uppercase -mt-14">
            {text.split("").map((p) => (
              <motion.button
                key={p}
                className={`relative z-[999999] uppercase ${
                  p === "W" ? "ml-2" : ""
                } `}
                whileHover={{
                  scale: 1.5,
                  transition: { duration: 0.25 },
                }}
              >
                {p}
              </motion.button>
            ))}
          </h1>
        </div>
        <div className=" h-screen w-[80%] bg-blk overflow-auto  text-white ">
          <Grid />
        </div>
      </div>
    </PageWrapper>
  );
}

export default Work;
