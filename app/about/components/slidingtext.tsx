"use client";
import React from "react";
import { motion } from "framer-motion";
function SlidingText() {
  const skills = [
    "React",
    "Redux",
    "Css",
    "JavaScript",
    "TypeScript",
    "Laravel",
    "HTML",
    "CSS",
    "Docker",
  ];
  return (
    <>
      <motion.div
        initial={{ y: 1400, rotate: 90 }}
        animate={{ y: -1300 }}
        exit={{ y: 1100 }}
        transition={{ repeat: Infinity, repeatType: "reverse", duration: 18 }}
        className="flex-row  text-3xl flex gap-6 fixed z-90 text-browny rotate-[90deg] top-[590px] left-[-70px] "
      >
        {skills.map((skill) => (
          <p key={skill}>{skill}</p>
        ))}
      </motion.div>
      <div className="flex-row  text-3xl flex gap-6 fixed z-90 text-browny  bottom-[10px] left-[0px] ">
        {skills.map((skill) => (
          <p key={skill}>{skill}</p>
        ))}
      </div>
    </>
  );
}

export default SlidingText;
