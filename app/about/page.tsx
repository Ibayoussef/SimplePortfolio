"use client";
import React from "react";
import { motion } from "framer-motion";
import { aboutSection } from "./aboutSection";
import { AboutSection } from "./interfaces/AboutSection";

const About: React.FC = () => {
  return (
    <>
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
    </>
  );
};

export default About;
