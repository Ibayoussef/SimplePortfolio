"use client";
import React from "react";
import { motion } from "framer-motion";
import { aboutSection } from "./aboutSection";
import { AboutSection } from "./interfaces/AboutSection";
import SlidingText from "./components/slidingtext";
import { PageWrapper } from "../components/page-wrapper";
import PageTitle from "app/components/PageTitle";
const About: React.FC = () => {
  return (
    <PageWrapper>
      <div className="flex row justify-start items-center">
        <PageTitle text={"About Me"} />
        <div className="relative flex h-screen w-full flex-col bg-blk justify-start text-white items-start p-20 max-sm:px-2 max-sm:h-[94vh]  max-sm:justify-center">
          <SlidingText />
          {aboutSection.map((aboutText: AboutSection) => (
            <motion.h1
              key={aboutText.delay}
              className={aboutText.classNames}
              initial={{ opacity: 0, x: -250 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{
                delay: aboutText.delay,
                x: { duration: 1 },
                default: { ease: "easeInOut" },
              }}
            >
              {aboutText.text}
            </motion.h1>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default About;
