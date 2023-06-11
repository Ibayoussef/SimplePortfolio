"use client";
import React from "react";
import { motion } from "framer-motion";
import { Gilda_Display } from "@next/font/google";
import { PageTitleProps } from "app/interfaces/PageTitleProps";
const GildaDisplay = Gilda_Display({
  weight: "400",
  subsets: ["latin"],
});

const PageTitle: React.FC<PageTitleProps> = ({ text }) => {
  const condition: (letter: string) => boolean = (letter: string) =>
    letter === "W" || (letter === "M" && text.indexOf(letter) !== 0);
  return (
    <div className="flex h-screen w-1/4 flex-col justify-start bg-primary items-center max-sm:hidden">
      <h1 className={"text-5xl h-fit   " + GildaDisplay.className}>2</h1>
      <h1 className="text-xl uppercase -mt-14">
        {text.split("").map((p) => (
          <motion.button
            key={p}
            className={`relative z-[999999] uppercase ${
              condition(p) ? "ml-2" : ""
            } `}
            whileHover={{
              scale: 1.5,
              color: "#DCB16B",
              transition: { duration: 0.25 },
            }}
          >
            {p}
          </motion.button>
        ))}
      </h1>
    </div>
  );
};

export default PageTitle;
